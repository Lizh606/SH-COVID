const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  // publicPath: '/SH-COVID-19/',
  lintOnSave: false,
  chainWebpack: (config) => {
    // config.plugins.delete("prefetch");
    config.resolve.alias.set("@", resolve("src"));
    //路径配置
    // config.resolve.alias
    //     .set('assets', resolve('src/assets'))

    //     .set('styles', resolve('src/assets/styles'))
    config.module
      .rule("mouse")
      .test(/\.(ico|cur)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[path][name].[ext]"
      })
      .end();

    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "development") {
        args[0].favicon = path.resolve("public/favicon_dev.ico");
      }
      return args;
    });
  },

  // webpack-dev-server 相关配置

  devServer: {
    // 调试端口
    host: "0.0.0.0",
    port: 8080,
    open: true,
    hot: true,
    watchOptions: {
      poll: true,
    },
    contentBase: "../dist",
    proxy: {
      "/services": {
        target: "https://mape.shanghai-map.net/arcgis/rest/services/",
        changeOrgin: true,
        secure: false,
        pathRewrite: {
          "^/services": "",
        },
      },
      "/api": {
        target: "http://112.74.95.70:83",
      },
    },
  },
  //其他配置....
  // 生产环境打包去除console.log 
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === "development"
        ? "cheap-module-eval-source-map"
        // : "cheap-module-eval-source-map",
        : "source-map",
    
    // gzip
 
  }
};
