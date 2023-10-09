/**
 * @description: 是否是数组
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isArray: (target: unknown) => boolean;
/**
 * @description: 是否是对象 egg: []==>true,{}==>true
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isObject: (target: unknown) => boolean;
/**
 * @description: 是否是普通对象 egg:[]==>false
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isPlainObject: (target: unknown) => boolean;
/**
 * @description: 是否是Map
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isMap: (target: unknown) => boolean;
/**
 * @description: 是否是Set
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isSet: (target: unknown) => boolean;
/**
 * @description: 是否是正则
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isRegExp: (target: unknown) => boolean;
/**
 * @description: 是否是函数
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isFunction: (target: unknown) => boolean;
/**
 * @description: 是否是date
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isDate: (target: unknown) => boolean;
/**
 * @description: 是否是字符串
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isString: (target: unknown) => boolean;
/**
 * @description: 是否是number
 * @param {unknown} target
 * @return {boolean}
 */
export declare const isNumber: (target: unknown) => boolean;
/**
 * @description: 是否是symbol
 * @param {unknown} target
 * @return {*}
 */
export declare const isSymbol: (target: unknown) => boolean;
/**
 * @description: 是否是promise
 * @param {any} target
 * @return {boolean}
 */
export declare const isPromise: (target: any) => boolean;
/**
 * @description: 是否是手机号
 * @param {any} target
 * @return {boolean}
 */
export declare const isPhone: (target: any) => boolean;
/**
 * @description: 是否是座机
 * @param {any} target
 * @return {boolean}
 */
export declare const isTelephone: (target: any) => boolean;
/**
 * @description: 是否是电子邮箱(支持中文邮箱)
 * @param {any} target
 * @return {*}
 */
export declare const isEmail: (target: any) => boolean;
/**
 * @description: 是否是身份证号(支持一代/二代)
 * @param {any} target
 * @return {boolean}
 */
export declare const isCard: (target: any) => boolean;
/**
 * @description: 是否是身份证号(一代)
 * @param {any} target
 * @return {boolean}
 */
export declare const isCard_1: (target: any) => boolean;
/**
 * @description: 是否是身份证号(二代)
 * @param {any} target
 * @return {boolean}
 */
export declare const isCard_2: (target: any) => boolean;
