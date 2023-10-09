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
const toTypeString = (target: unknown) =>
  Object.prototype.toString.call(target);
/**
 * @description: 是否是数组
 * @param {unknown} target
 * @return {boolean}
 */
export const isArray = (target: unknown): boolean => Array.isArray(target);
/**
 * @description: 是否是对象 egg: []==>true,{}==>true
 * @param {unknown} target
 * @return {boolean}
 */
export const isObject = (target: unknown): boolean =>
  target !== null && typeof target === "object";
/**
 * @description: 是否是普通对象 egg:[]==>false
 * @param {unknown} target
 * @return {boolean}
 */
export const isPlainObject = (target: unknown): boolean =>
  toTypeString(target) === "[object Object]";
/**
 * @description: 是否是Map
 * @param {unknown} target
 * @return {boolean}
 */
export const isMap = (target: unknown): boolean =>
  toTypeString(target) === "[object Map]";
/**
 * @description: 是否是Set
 * @param {unknown} target
 * @return {boolean}
 */
export const isSet = (target: unknown): boolean =>
  toTypeString(target) === "[object Set]";
/**
 * @description: 是否是正则
 * @param {unknown} target
 * @return {boolean}
 */
export const isRegExp = (target: unknown): boolean =>
  toTypeString(target) === "[object RegExp]";
/**
 * @description: 是否是函数
 * @param {unknown} target
 * @return {boolean}
 */
export const isFunction = (target: unknown): boolean =>
  toTypeString(target) === "[object Function]";
/**
 * @description: 是否是date
 * @param {unknown} target
 * @return {boolean}
 */
export const isDate = (target: unknown): boolean =>
  toTypeString(target) == "[object Date]";
/**
 * @description: 是否是字符串
 * @param {unknown} target
 * @return {boolean}
 */
export const isString = (target: unknown): boolean =>
  typeof target === "string";
/**
 * @description: 是否是number
 * @param {unknown} target
 * @return {boolean}
 */
export const isNumber = (target: unknown): boolean =>
  typeof target === "number";
/**
 * @description: 是否是symbol
 * @param {unknown} target
 * @return {*}
 */
export const isSymbol = (target: unknown): boolean =>
  typeof target === "symbol";
/**
 * @description: 是否是promise
 * @param {any} target
 * @return {boolean}
 */
export const isPromise = (target: any): boolean => {
  return (
    (isObject(target) || isFunction(target)) &&
    isFunction(target.then) &&
    isFunction(target.catch)
  );
};
/**
 * @description: 是否是手机号
 * @param {any} target
 * @return {boolean}
 */
export const isPhone = (target: any): boolean => {
  return /^(?:(?:\+|00)86)?1\d{10}$/.test(target);
};
/**
 * @description: 是否是座机
 * @param {any} target
 * @return {boolean}
 */
export const isTelephone = (target: any): boolean => {
  return /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(target);
};
/**
 * @description: 是否是电子邮箱(支持中文邮箱)
 * @param {any} target
 * @return {*}
 */
export const isEmail = (target: any): boolean => {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
    target
  );
};
/**
 * @description: 是否是身份证号(支持一代/二代)
 * @param {any} target
 * @return {boolean}
 */
export const isCard = (target: any): boolean => {
  return /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
    target
  );
};
/**
 * @description: 是否是身份证号(一代)
 * @param {any} target
 * @return {boolean}
 */
export const isCard_1 = (target: any): boolean => {
  return /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/.test(
    target
  );
};
/**
 * @description: 是否是身份证号(二代)
 * @param {any} target
 * @return {boolean}
 */
export const isCard_2 = (target: any): boolean => {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
    target
  );
};
