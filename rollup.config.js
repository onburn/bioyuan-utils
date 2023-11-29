/*
 * @Author: ‘dudu’ 852317266@qq.com
 * @Date: 2023-11-27 09:33:04
 * @LastEditors: ‘dudu’ 852317266@qq.com
 * @LastEditTime: 2023-11-27 17:11:10
 * @FilePath: /bioyuan-utils/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import tsPlugin from "@rollup/plugin-typescript"; // 让 rollup 认识 ts 的代码
// 为了将引入的 npm 包，也打包进最终结果中
import resolve from "@rollup/plugin-node-resolve";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert {type: 'json'};

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._BY_UTILS_VERSION_ = '${pkg.version}'
}`;

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.browser,
      format: "esm",
      footer,
    },
    {
      file: pkg.module,
      format: "umd",
      name: "byUtils",
      footer,
    },
    {
      file: pkg.main,
      format: "cjs",
      footer,
    },
  ],
  plugins: [
    tsPlugin({
      tsconfig: "tsconfig.json",
      module: "esnext",
    }),
    commonjs(),
    resolve({
      moduleDirectories: ['node_modules']
    }),
    nodePolyfills()
  ],
  external: ['exceljs']
};
