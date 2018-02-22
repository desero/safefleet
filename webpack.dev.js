const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
    publicPath: '/particles/',
    port: 3000,
    host: '0.0.0.0',
  },
})
