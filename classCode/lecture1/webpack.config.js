const path = require('path')

module.exports = {
    mode: 'development',
    entry : "./src/index.js",
    output : {
        path : path.resolve(".","build"),
        filename : "bundle.js"
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.css$/, use: 'style-loader' },
        ],
      },module: {
        rules: [
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader', loader: 'css-loader'}]
          },
          {
            test: /\.js$/,
            use: ["babel-loader"]
          }


        ]
      }
    
    
}