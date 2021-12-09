import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript2 from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import { name } from '../package.json'
const path = require('path')
const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'node_modules',
    'examples/App.vue',
    'examples/main.ts'
  ]
}

const file = type => `lib/${name}.${type}.js`
export {
  name,
  file
}
export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript2({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  external: ['vue']
}
