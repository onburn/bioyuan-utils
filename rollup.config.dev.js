/*
 * @Author: ‘dudu’ 852317266@qq.com
 * @Date: 2023-11-27 09:55:28
 * @LastEditors: ‘dudu’ 852317266@qq.com
 * @LastEditTime: 2023-11-27 11:09:00
 * @FilePath: /bioyuan-utils/rollup.config.dev.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
process.env.NODE_ENV = 'development';
import path from "path";
import serve from "rollup-plugin-serve"
import config from './rollup.config.js';
const __dirname = path.resolve();
const resolveFile = function (filePath) {
    return path.join(__dirname, '', filePath)
}
const PORT = 8080;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;
setTimeout(() => {
    console.log(`[dev]: ${devUrl}`)
}, 1000);

config.output.sourcemap = true;
config.plugins = [
    ...config.plugins,
    ...[
        serve({
            open:true,
            port: PORT,
            contentBase: [resolveFile('')]
        })
    ]
]


export default config