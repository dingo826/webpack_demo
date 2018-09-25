const path = require('path');
const merge = require('webpack-merge');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'production',
  plugins: [ 
    new WebpackDeepScopeAnalysisPlugin()
  ]
});

