interface ConfigProps {
    data: any[];
    fields: string[];
    headers: string[] | string[][];
    merges?: {
        row: number;
        col: number;
        rowspan: number;
        colspan: number;
    }[];
    attrs?: any[];
    colsWidth?: number[];
    protect?: any;
    sheetName?: string;
    views?: {
        state: 'frozen' | 'split';
        xSplit: number;
        ySplit: number;
    }[];
}
declare function exportExcel(config: ConfigProps | ConfigProps[], fileName: string): void;
export default exportExcel;
