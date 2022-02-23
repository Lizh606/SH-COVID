const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: '/map/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    //路径配置
    // config.resolve.alias
    //     .set('assets', resolve('src/assets'))
    //     .set('styles', resolve('src/assets/styles'))
  },

  // webpack-dev-server 相关配置
  devServer: {
    // 调试端口
    host: '0.0.0.0',
    port: 8888,
    open: true,
    hot: true,
    watchOptions: {
      poll: true,
    },
    contentBase: '../dist',
    proxy: {
       '/services': {
        target:
          'https://mape.shanghai-map.net/arcgis/rest/services/',
        changeOrgin: true,
        secure: false,
        pathRewrite: {
          '^/services': '',
        },
      },
    },
  },
  //其他配置....
}
