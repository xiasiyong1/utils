const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");
const babel = require("@rollup/plugin-babel");
const path = require("path");
const fs = require("fs");

const sourceDir = path.resolve(__dirname, "src");
console.log(sourceDir);

const buildEntry = (dir) => {
  return fs.readdirSync(dir).reduce((entries, filename) => {
    console.log(dir);
    if (filename === "index.ts" || filename === "test") return entries;
    const filepath = path.resolve(dir, filename);
    entries.push(filepath);
    return entries;
  }, []);
};

const entries = buildEntry(sourceDir);

module.exports = [
  {
    input: entries,
    output: [
      {
        dir: "lib",
        format: "esm",
        entryFileNames: "[name].js",
        // sourcemap: true, // 是否输出sourcemap
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ module: "ESNext" }),
      babel({ babelHelpers: "bundled" }),
    ],
  },
];
