import ExcelJS from 'exceljs';

/*
 * @Author: dudu dkbon1120@outlook.com
 * @Date: 2023-09-27 15:24:49
 * @LastEditors: dudu dkbon1120@outlook.com
 * @LastEditTime: 2023-10-09 15:26:53
 * @FilePath: \utils\src\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description:
 * @param {unknown} target
 * @return {*} string egg:[object Date]
 */
var toTypeString = function (target) {
    return Object.prototype.toString.call(target);
};
/**
 * @description: 是否是数组
 * @param {unknown} target
 * @return {boolean}
 */
var isArray = function (target) { return Array.isArray(target); };
/**
 * @description: 是否是对象 egg: []==>true,{}==>true
 * @param {unknown} target
 * @return {boolean}
 */
var isObject = function (target) {
    return target !== null && typeof target === "object";
};
/**
 * @description: 是否是普通对象 egg:[]==>false
 * @param {unknown} target
 * @return {boolean}
 */
var isPlainObject = function (target) {
    return toTypeString(target) === "[object Object]";
};
/**
 * @description: 是否是Map
 * @param {unknown} target
 * @return {boolean}
 */
var isMap = function (target) {
    return toTypeString(target) === "[object Map]";
};
/**
 * @description: 是否是Set
 * @param {unknown} target
 * @return {boolean}
 */
var isSet = function (target) {
    return toTypeString(target) === "[object Set]";
};
/**
 * @description: 是否是正则
 * @param {unknown} target
 * @return {boolean}
 */
var isRegExp = function (target) {
    return toTypeString(target) === "[object RegExp]";
};
/**
 * @description: 是否是函数
 * @param {unknown} target
 * @return {boolean}
 */
var isFunction = function (target) {
    return toTypeString(target) === "[object Function]";
};
/**
 * @description: 是否是date
 * @param {unknown} target
 * @return {boolean}
 */
var isDate = function (target) {
    return toTypeString(target) == "[object Date]";
};
/**
 * @description: 是否是字符串
 * @param {unknown} target
 * @return {boolean}
 */
var isString = function (target) {
    return typeof target === "string";
};
/**
 * @description: 是否是number
 * @param {unknown} target
 * @return {boolean}
 */
var isNumber = function (target) {
    return typeof target === "number";
};
/**
 * @description: 是否是symbol
 * @param {unknown} target
 * @return {*}
 */
var isSymbol = function (target) {
    return typeof target === "symbol";
};
/**
 * @description: 是否是promise
 * @param {any} target
 * @return {boolean}
 */
var isPromise = function (target) {
    return ((isObject(target) || isFunction(target)) &&
        isFunction(target.then) &&
        isFunction(target.catch));
};
/**
 * @description: 是否是手机号
 * @param {any} target
 * @return {boolean}
 */
var isPhone = function (target) {
    return /^(?:(?:\+|00)86)?1\d{10}$/.test(target);
};
/**
 * @description: 是否是座机
 * @param {any} target
 * @return {boolean}
 */
var isTelephone = function (target) {
    return /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(target);
};
/**
 * @description: 是否是电子邮箱(支持中文邮箱)
 * @param {any} target
 * @return {*}
 */
var isEmail = function (target) {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(target);
};
/**
 * @description: 是否是身份证号(支持一代/二代)
 * @param {any} target
 * @return {boolean}
 */
var isCard = function (target) {
    return /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(target);
};
/**
 * @description: 是否是身份证号(一代)
 * @param {any} target
 * @return {boolean}
 */
var isCard_1 = function (target) {
    return /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/.test(target);
};
/**
 * @description: 是否是身份证号(二代)
 * @param {any} target
 * @return {boolean}
 */
var isCard_2 = function (target) {
    return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(target);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var FileSaver_min = {exports: {}};

(function (module, exports) {
	(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d);},e.onerror=function(){console.error("could not download file");},e.send();}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null;},j.readAsDataURL(a);}else {var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l);},4E4);}};f.saveAs=a.saveAs=a,(module.exports=a);});

	
} (FileSaver_min));

var FileSaver_minExports = FileSaver_min.exports;

function judgeExcelLibSciprt(cb) {
    if (ExcelJS || window.ExcelJS) { // 加载过
        cb();
    }
    else {
        var script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = 'https://cdn.staticfile.org/exceljs/4.4.0/exceljs.bare.js';
        document.head.appendChild(script);
        script.addEventListener("load", function () {
            cb();
        });
    }
}
function exportExcel(config, fileName) {
    if (!config)
        return;
    // 校验exceljs是否加载完成
    judgeExcelLibSciprt(function () {
        var options = {
            fileName: fileName + '.xlsx' || "\u5BFC\u51FAexcel\u6587\u4EF6[".concat(Date.now(), "].xlsx"),
            worksheets: []
        };
        var newConfig = [];
        if (!isArray(config)) {
            newConfig = [config];
        }
        else {
            newConfig = config;
        }
        newConfig.forEach(function (item) {
            // 深拷贝data【JSON.stringify有缺陷，可自行换成_.cloneDeep】
            var data = JSON.parse(JSON.stringify(item.data));
            var results = data.map(function (obj) {
                return item.fields.map(function (key) {
                    return obj[key];
                });
            }); // 生成完整excel数据
            var excelData = [];
            excelData = excelData.concat([item.headers]).concat(results); // 单元格合并处理【excel数据的第一行/列是从1开始】
            var excelMerges = [];
            if (item.merges) {
                excelMerges = item.merges.map(function (m) {
                    return [m.row + 1, m.col + 1, m.row + m.rowspan, m.col + m.colspan];
                }); // 单元格配置处理【excel数据的第一行/列是从1开始】
            }
            var excelAttrs = [];
            if (item.attrs && item.attrs.length) {
                excelAttrs = item.attrs.map(function (attr) {
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
                        xSplit: 0,
                        ySplit: 1 // 冻结多少行
                    }
                ];
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
        });
        createExcel(options);
    });
}
// 创建excel文件
function createExcel(options) {
    return __awaiter(this, void 0, void 0, function () {
        var workbook, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options.worksheets.length)
                        return [2 /*return*/];
                    workbook = new (ExcelJS || window.ExcelJS).Workbook();
                    _loop_1 = function (i) {
                        var sheetOption, sheet, i_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    sheetOption = options.worksheets[i];
                                    sheet = workbook.addWorksheet(sheetOption.sheetName || "sheet" + (i + 1));
                                    sheet.addRows(sheetOption.data); // 配置视图
                                    sheet.views = sheetOption.views; // 单元格合并处理【开始行，开始列，结束行，结束列】
                                    if (sheetOption.merges) {
                                        sheetOption.merges.forEach(function (item) {
                                            sheet.mergeCells(item);
                                        });
                                    } // 工作表保护
                                    if (!sheetOption.protect) return [3 /*break*/, 2];
                                    return [4 /*yield*/, sheet.protect(sheetOption.protect.password, sheetOption.protect.options)];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    if (sheetOption.attrs.length) {
                                        sheetOption.attrs.forEach(function (item) {
                                            var attr = item.attr || {}; // 获取开始行-结束行; 开始列-结束列
                                            var rowStart = item.rowStart;
                                            var rowEnd = item.rowEnd;
                                            var colStart = item.colStart;
                                            var colEnd = item.colEnd;
                                            if (rowStart) {
                                                var _loop_2 = function (r) {
                                                    // 获取当前行
                                                    var row = sheet.getRow(r);
                                                    if (colStart) {
                                                        var _loop_4 = function (c) {
                                                            // 获取当前单元格
                                                            var cell = row.getCell(c);
                                                            Object.keys(attr).forEach(function (key) {
                                                                // 给当前单元格设置定义的样式
                                                                cell[key] = attr[key];
                                                            });
                                                        };
                                                        // 列设置
                                                        for (var c = colStart; c <= colEnd; c++) {
                                                            _loop_4(c);
                                                        }
                                                    }
                                                    else {
                                                        // 未设置列，整行设置【大纲级别】
                                                        Object.keys(attr).forEach(function (key) {
                                                            row[key] = attr[key];
                                                        });
                                                    }
                                                };
                                                // 设置行
                                                for (var r = rowStart; r <= rowEnd; r++) {
                                                    _loop_2(r);
                                                }
                                            }
                                            else if (colStart) {
                                                var _loop_3 = function (c) {
                                                    // 获取当前列，整列设置【大纲级别】
                                                    var column = sheet.getColumn(c);
                                                    Object.keys(attr).forEach(function (key) {
                                                        column[key] = attr[key];
                                                    });
                                                };
                                                // 未设置行，只设置了列
                                                for (var c = colStart; c <= colEnd; c++) {
                                                    _loop_3(c);
                                                }
                                            }
                                            else {
                                                // 没有设置具体的行列，则为整表设置
                                                Object.keys(attr).forEach(function (key) {
                                                    sheet[key] = attr[key];
                                                });
                                            }
                                        });
                                    } // 列宽设置
                                    if (sheetOption.columnsWidth) {
                                        for (i_1 = 0; i_1 < sheet.columns.length; i_1++) {
                                            sheet.columns[i_1].width = sheetOption.columnsWidth[i_1];
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < options.worksheets.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    workbook.xlsx.writeBuffer().then(function (buffer) {
                        // application/octet-stream 二进制数据
                        FileSaver_minExports.saveAs(new Blob([buffer], { type: "application/octet-stream" }), options.fileName);
                    });
                    return [2 /*return*/];
            }
        });
    });
}

export { exportExcel, isArray, isCard, isCard_1, isCard_2, isDate, isEmail, isFunction, isMap, isNumber, isObject, isPhone, isPlainObject, isPromise, isRegExp, isSet, isString, isSymbol, isTelephone };

if(typeof window !== 'undefined') {
  window._BY_UTILS_VERSION_ = '1.1.0'
}
