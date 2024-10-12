const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js', // Your entry point for the AngularJS app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Template for the HTML file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/public.html', to: '' }, // Copies public.html to the dist folder
        { from: 'src/secure.html', to: '' }  // Copies secure.html to the dist folder
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Replaces contentBase in Webpack 5
    },
    compress: true,
    port: 9000, // Webpack dev server port
    proxy: [
      // Proxy API requests to backend server
      {
        context: ['/api'],
        target: 'http://localhost:4000', // Backend server
        pathRewrite: { '^/api': '' }, // Optional: remove "/api" prefix when forwarding
        secure: false // If you're proxying to HTTPS, disable strict SSL verification
      },
      // You can add more proxies here if needed, e.g., another service
      {
        context: ['/login'],
        target: 'http://localhost:4000/login', // Proxy login requests to this target
        changeOrigin: true,
        pathRewrite: { '^/login': '' },
      },
      // You can add more proxies here if needed, e.g., another service
      {
        context: ['/kinde_callback'],
        target: 'http://localhost:4000/kinde_callback', // Proxy login requests to this target
        changeOrigin: true,
        pathRewrite: { '^/kinde_callback': '' },
      }
    ]
  }
};