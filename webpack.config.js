const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
              test: /\.jsx?$/,
              // ignore transpiling JavaScript from node_modules as it should be that state
              exclude: /node_modules/,
              // use the babel-loader for transpiling JavaScript to a suitable format
              loader: 'babel-loader',
              options: {
                // attach the presets to the loader (most projects use .babelrc file instead)
                presets: ["@babel/preset-env", "@babel/preset-react", ]
              }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
}