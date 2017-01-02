var path = require('path');

var entry = {
    //path.resolve(__dirname, "src/scripts")
    frontDesk: "./src/scripts/frontDesk.js",
    t: "./src/scripts/t.js",
};

var rootPath = path.join(__dirname); 
var outputPath = path.join(__dirname, "dist"); 
var publicPath = "/dist";
var output = {
    path: outputPath,
    filename: "js/[name].bundle.js",
    publicPath: publicPath
};

var moduleObj = {};

var loaders = [];

var loader = {
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"]
};
loaders.push(loader);

loader = {
    test: /\.scss$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
};
loaders.push(loader);

loader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: "babel-loader",
    query: {
        babelrc: true
    }
};
loaders.push(loader);

moduleObj.loaders = loaders;


module.exports = {
    devtool: "source-map",
    entry: entry,
    output: output,
    module: moduleObj,
    devServer: {
        contentBase: "./",
        host: '127.0.0.1',
        port: 9999,
        publicPath: output.publicPath
    }
};
