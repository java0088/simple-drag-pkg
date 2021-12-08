const path = require('path')

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.ts', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          '~': path.resolve('packages'),
        },
      },
    }
  },
}
