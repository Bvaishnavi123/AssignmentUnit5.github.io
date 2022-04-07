const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    },
}
