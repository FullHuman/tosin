import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "src/index.js",
    output: [
        {
            file: "lib/tosin.es.js",
            format: "es"
        },
        {
            file: "lib/tosin.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [builtins(), resolve()],
    external: ['degit', 'enquirer', 'util', 'fs']
}
