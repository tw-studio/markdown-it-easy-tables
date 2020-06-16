const babelOptions = {
  plugins: [],
  presets: ['@babel/preset-env'],
}
module.exports = require('babel-jest').createTransformer(babelOptions)
