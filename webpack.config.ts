import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

var commonConfig = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist'),
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  externals: [
    /^@angular(\\|\/)core/,
    /^rxjs\//
  ],
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      root('src'),
      {}
    )
  ]
};

var clientConfig = {
  target: 'web',
  entry: {
    'index.browser.umd': './src/index.browser'
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader'] }
    ],
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};

var serverConfig = {
  target: 'node',
  entry: {
    'index.server.umd': './src/index.server'
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader?declaration=true'] }
    ],
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

module.exports = [
  // Client
  webpackMerge({}, commonConfig, clientConfig),

  // Server
  webpackMerge({}, commonConfig, serverConfig)
];

function root(...args: string[]) {
  return path.join(__dirname, ...args);
}
