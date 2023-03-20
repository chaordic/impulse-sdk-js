const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, './src'),
    ],
    alias: {
      '@/events': path.resolve(__dirname, 'src', 'events'),
    }
  },
  output: {
    filename: 'bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist-es'),
  },
};
