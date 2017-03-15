var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, "client/dist/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue': 'vue/dist/vue.min.js'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
};
