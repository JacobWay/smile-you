var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rootPath = path.join(__dirname); 
var outputPath = path.join(__dirname, "dist"); 
var publicPath = "/dist";
var scssPath = path.join(__dirname, "src/scss");
var debug = process.env.NODE_ENV !== "production";


/*
 * entry
 */
var entry = {
    //t: "./src/scripts/t.js",
    frontDesk: "./src/scripts/frontDesk.js",
    //reduxCounter: "./src/scripts/reduxCounter.js",
    counter: "./src/scripts/counter.js",
};


/*
 * output
 */
var output = {
    path: outputPath,
    filename: "js/[name].bundle.js",
    publicPath: publicPath
};


/*
 * module
 */
var moduleObj = {};

var loaders = [];
var loader;

loader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: "babel-loader",
    query: {
        babelrc: true
    }
};
loaders.push(loader);

loader = {
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"]
};
loaders.push(loader);

var loaderScss, loaderDev, loaderProd;
loaderDev = {
    test: /\.scss$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
};

//var extractScss = new ExtractTextPlugin("css/[name].css");
loaderProd = {
    test: /\.scss$/,
    exclude: /(node_modules|bower_components)/,
    include: scssPath,
    loader: ExtractTextPlugin.extract(["css", "sass"])
}
loaderScss = debug ? loaderDev : loaderProd
loaders.push(loaderScss);

moduleObj.loaders = loaders;


/*
 * plugins
 */
var plugins = [];
plugins.push(new ExtractTextPlugin("css/[name].css"));


module.exports = {
    devtool: "source-map",
    entry: entry,
    output: output,
    module: moduleObj,
    plugins: plugins,
    devServer: {
        contentBase: "./",
        host: '127.0.0.1',
        port: 9999,
        publicPath: output.publicPath
    }
};
