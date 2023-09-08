const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',                            // chế độ compile
  entry: {                                        // các file js vào
    index: './src/index.js',
  },
  devtool: 'inline-source-map',                   // tạo source map (các thông tin sẽ hiển thị khi có file bị lỗi)
  devServer: {
    static: './dist'
  },
  plugins: [                                      // tạo file index.html
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
  output: {                                       // các files ra sau khi build
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',                   // ngăn không cho module.id thay đổi sau mỗi lần chạy build, sẽ tránh tạo lại hash cho module, tối ưu caching
    runtimeChunk: 'single',
    splitChunks: {                                 // tách các module thành các bundles riêng biệt
      cacheGroups: {                                     
        vendor: {                                  // tách các thành phần của node_modules thành vendor
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },  
  },
};

