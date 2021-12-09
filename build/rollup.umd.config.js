import basicConfig, { name, file } from './rollup.config.js'

export default {
  ...basicConfig,
  output: {
    name: 'SimpleDrag',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue'
    },
    exports: 'named'
  }
}
