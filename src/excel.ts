/*
 * @Author: ‘dudu’ 852317266@qq.com
 * @Date: 2023-11-27 11:35:45
 * @LastEditors: ‘dudu’ 852317266@qq.com
 * @LastEditTime: 2023-11-29 17:12:29
 * @FilePath: /bioyuan-utils/src/excel.ts
 * @Description: excel 工具类
 */
import ExcelJS from "exceljs";
// import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import { isArray } from "./type";
interface ConfigProps {
    data: any[]; // 表格数据
    fields: string[]; // 字段列表
    headers: string[] | string[][]; // 表头列表[[]], 可以是多级表头[[A1,B1],[A2,B2]]
    merges?: {
        row: number,
        col: number,
        rowspan: number,
        colspan: number
    }[]; // 需合并单元格,需要考虑表头的行数 [{row:1,col:1,rowspan:1,colspan:2}]
    attrs?: any[]; // 单元格样式
    colsWidth?: number[]; // 列宽度
    protect?: any; // 工作区保护
    sheetName?: string;
    views?: {
        state: 'frozen' | 'split',
        xSplit: number, // 冻结多少列
        ySplit: number // 冻结多少行
    }[]
}
function judgeExcelLibSciprt(cb: () => void) {
    if (ExcelJS || (window as any).ExcelJS) { // 加载过
        cb()
    } else {
        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = 'https://cdn.staticfile.org/exceljs/4.4.0/exceljs.bare.js';
        document.head.appendChild(script)
        script.addEventListener("load", () => {
            cb()
        })
    }
}
function exportExcel(config: ConfigProps | ConfigProps[], fileName: string) {
    if (!config) return;
    // 校验exceljs是否加载完成
    judgeExcelLibSciprt(() => {
        const options: any = {
            fileName: fileName + '.xlsx' || `导出excel文件[${Date.now()}].xlsx`,
            worksheets: []
        };
        let newConfig: ConfigProps[] = [];
        if (!isArray(config)) {
            newConfig = [config as ConfigProps];
        } else {
            newConfig = config as ConfigProps[];
        }
        newConfig.forEach(item => {
            // 深拷贝data【JSON.stringify有缺陷，可自行换成_.cloneDeep】
            const data = JSON.parse(JSON.stringify(item.data));
            const results = data.map((obj: { [x: string]: any; }) => {
                return item.fields.map((key) => {
                    return obj[key];
                });
            }); // 生成完整excel数据
            let excelData: any[] = [];
            excelData = excelData.concat([item.headers]).concat(results); // 单元格合并处理【excel数据的第一行/列是从1开始】
            let excelMerges: any = [];
            if (item.merges) {
                excelMerges = item.merges.map((m) => {
                    return [m.row + 1, m.col + 1, m.row + m.rowspan, m.col + m.colspan];
                }); // 单元格配置处理【excel数据的第一行/列是从1开始】
            }
            let excelAttrs = [];
            if (item.attrs && item.attrs.length) {
                excelAttrs = item.attrs.map((attr) => {
                    attr.rowStart += 1;
                    attr.rowEnd += 1;
                    attr.colStart += 1;
                    attr.colEnd += 1;
                    return attr;
                });
            }
            if (!item.views) {
                item.views = [
                    {
                        state: 'frozen',
                        xSplit: 0, // 冻结多少列
                        ySplit: 1 // 冻结多少行
                    }
                ]
            }
            options.worksheets.push({
                data: excelData,
                merges: excelMerges,
                attrs: excelAttrs,
                views: item.views,
                columnsWidth: item.colsWidth,
                protect: item.protect,
                sheetName: item.sheetName,
            });
        })
        createExcel(options);
    })

}
// 创建excel文件
async function createExcel(options: {
    fileName: string;
    worksheets: any[]
}) {
    if (!options.worksheets.length) return;
    const workbook = new (ExcelJS || (window as any).ExcelJS).Workbook(); // 创建工作簿
    for (let i = 0; i < options.worksheets.length; i++) {
        const sheetOption = options.worksheets[i]; // 创建工作表
        const sheet: any = workbook.addWorksheet(
            sheetOption.sheetName || "sheet" + (i + 1)
        ); // 添加数据行
        sheet.addRows(sheetOption.data); // 配置视图
        sheet.views = sheetOption.views; // 单元格合并处理【开始行，开始列，结束行，结束列】
        if (sheetOption.merges) {
            sheetOption.merges.forEach((item: ExcelJS.Range) => {
                sheet.mergeCells(item);
            });
        } // 工作表保护
        if (sheetOption.protect) {
            const res = await sheet.protect(
                sheetOption.protect.password,
                sheetOption.protect.options
            );
        } // 单元格样式处理
        if (sheetOption.attrs.length) {
            sheetOption.attrs.forEach((item: any) => {
                const attr = item.attr || {}; // 获取开始行-结束行; 开始列-结束列
                const rowStart = item.rowStart;
                const rowEnd = item.rowEnd;
                const colStart = item.colStart;
                const colEnd = item.colEnd;
                if (rowStart) {
                    // 设置行
                    for (let r = rowStart; r <= rowEnd; r++) {
                        // 获取当前行
                        const row: any = sheet.getRow(r);
                        if (colStart) {
                            // 列设置
                            for (let c = colStart; c <= colEnd; c++) {
                                // 获取当前单元格
                                const cell: any = row.getCell(c);
                                Object.keys(attr).forEach((key) => {
                                    // 给当前单元格设置定义的样式
                                    cell[key] = attr[key];
                                });
                            }
                        } else {
                            // 未设置列，整行设置【大纲级别】
                            Object.keys(attr).forEach((key) => {
                                row[key] = attr[key];
                            });
                        }
                    }
                } else if (colStart) {
                    // 未设置行，只设置了列
                    for (let c = colStart; c <= colEnd; c++) {
                        // 获取当前列，整列设置【大纲级别】
                        const column: any = sheet.getColumn(c);
                        Object.keys(attr).forEach((key) => {
                            column[key] = attr[key];
                        });
                    }
                } else {
                    // 没有设置具体的行列，则为整表设置
                    Object.keys(attr).forEach((key) => {
                        sheet[key] = attr[key];
                    });
                }
            });
        } // 列宽设置
        if (sheetOption.columnsWidth) {
            for (let i = 0; i < sheet.columns.length; i++) {
                sheet.columns[i].width = sheetOption.columnsWidth[i];
            }
        }
    } // 生成excel文件
    workbook.xlsx.writeBuffer().then((buffer) => {
        // application/octet-stream 二进制数据
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            options.fileName
        );
    });
}

export default exportExcel