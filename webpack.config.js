const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',                            // chế độ compile
  entry: {                                        // các file js vào
    main: './src/index.js',
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
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // library: "webpackNumbers",                 // khi dùng cái này webpack sẽ chiir bundle ra thư viện dùng được cho thẻ script
    globalObject: 'this',                         
    library: {                                    // còn với cái này thì sẽ dùng được cho cả commonJS, node.js,...
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {                                    
    lodash: {                                      // Đây là tên của thư viện hoặc mô-đun mà bạn muốn externalize, tức là bạn không muốn nó được đóng gói vào bundle chính của ứng dụng
      commonjs: 'lodash',                          // bạn đang nói cho Webpack rằng khi một mô-đun CommonJS import Lodash, nó không cần bundle Lodash vào mà chỉ cần sử dụng Lodash từ nguồn ngoài (chẳng hạn như từ Node.js modules).
      commonjs2: 'lodash',                         
      amd: 'lodash',
      root: '_',                                   // cho biết rằng nếu thư viện Lodash được sử dụng trong một môi trường không hỗ trợ CommonJS, AMD hoặc ES6 Modules (như trình duyệt web thông qua thẻ <script>), thì nó sẽ được tìm kiếm trong biến toàn cục 'window._'
    },
  },

};

