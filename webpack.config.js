const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // Set the template path here
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'  // Remove the hash part if it was previously included
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|PNG|JPG|JPEG|GIF|SVG|WEBP)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'  // Remove the hash part if it was previously included
        }
      },
      {
        // Rule for video files
        test: /\.(mp4|webm|ogg|avi)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/'  // Videos will be outputted in a "videos" folder
            }
          }
        ]
      }
    ]
  }
};
