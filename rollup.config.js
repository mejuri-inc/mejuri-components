import babel from '@rollup/plugin-babel';
import packageJson from "./package.json";
import alias from 'rollup-plugin-alias';
import {resolve} from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const dependencies = packageJson.dependencies || {};

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist.esm.modules",
      format: "es",
      preserveModules : true
    },
    {
      dir: "dist.cjs.modules",
      format: "cjs",
      preserveModules : true
    }
  ],
  plugins: [
    // alias({
    //   applicationRoot: resolve(__dirname , '/src')
    // }),
    babel({
      plugins: [
        ["@babel/plugin-proposal-export-default-from"],
        ["module-resolver", {
          "root": ["./src"]
        }]
      ],
      exclude: ["node_modules/**"],
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react"
      ]
    }),
    nodeResolve(),
    commonjs(),
    json()
  ],
  external: Object.keys(dependencies)
};
