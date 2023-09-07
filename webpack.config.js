const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',                            // chế độ compile
  entry: {                                        // các file js vào
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',                   // tạo source map (các thông tin sẽ hiển thị khi có file bị lỗi)
  devServer: {
    static: './dist'
  },
  plugins: [                                      // tạo file index.html
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {                                       // các files ra sau khi build
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  optimization: {                                 // bởi vì có nhiều entrypoint  trong 1 page HTML, nếu k có, có thể gây ra lỗi
    runtimeChunk: 'single',
  },
};

