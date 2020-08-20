import babel from '@rollup/plugin-babel'
import packageJson from './package.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const { peerDependencies = {}, dependencies = {} } = packageJson

// If a dependency is "external" rollup will NOT change e.g.
// import { Button } from '@material-ui/core'
// to:
// import { Button } from '../../../node_modules/@material-ui/core'
// This WILL NOT happen if '@material-ui/core' is declared as external

const external = [
  ...Object.keys({
    ...peerDependencies,
    ...dependencies
  }),
  '@material-ui/core/styles',
  'regenerator-runtime/runtime.js'
]

console.log('External:', external)

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist.esm.modules',
      format: 'es',
      preserveModules: true
    },
    {
      dir: 'dist.cjs.modules',
      format: 'cjs',
      preserveModules: true
    }
  ],
  plugins: [
    // alias({
    //   applicationRoot: resolve(__dirname , '/src')
    // }),
    babel({
      plugins: [
        ['@babel/plugin-proposal-export-default-from'],
        [
          'module-resolver',
          {
            root: ['./src']
          }
        ]
      ],
      exclude: ['node_modules/**'],
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ]
    }),
    nodeResolve(),
    commonjs(),
    json()
  ],
  external: external
}
