import Webpack from 'webpack'

const config = {
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}

const client = Object.assign({}, config, {
  entry: './src/Client.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  plugins: config.plugins.concat([
    // new Webpack.optimize.DedupePlugin(),
    // new Webpack.optimize.UglifyJsPlugin(),
    // new Webpack.optimize.AggressiveMergingPlugin()
  ])
})

const server = Object.assign({}, config, {
  entry: './src/Server.js',
  output: {
    path: './dist',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: /^[a-z][a-z\.\-0-9]*$/,
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
})

export default [client, server]
