'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target:'http://www.trinyoung.cn:9220',
        changeOrigin:true,
        secure: true, // 必要参数， 不设置的话，不生效
        pathRewrite: {
          '^/api':'/api'
        }
      },
      '/myapi': {
        target: 'http://www.trinyoung.cn:9221',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/myapi':'/api'
        }
      },
      '/upload': {
        target: 'http://www.trinyoung.cn:3000',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/upload': '/api'
        }
      },
      '/capi': {
        target: 'http://www.trinyoung.cn:9222',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/capi': '/api'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9223, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // http://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // http://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // http://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),
    index: path.resolve('/usr/local/nginx/html/', './dist/index.html'),

    // Paths
    // assetsRoot: path.resolve(__dirname, '../dist'),
    assetsRoot: path.resolve('/usr/local/nginx/html/', './dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // http://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
