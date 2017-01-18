var webpack = require('webpack');
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
    //navBar: "./src/scripts/navBar.js",
    //reduxCounter: "./src/scripts/reduxCounter.js",
    //counter: "./src/scripts/counter.js",
    //productList: "./src/scripts/productList.js",
    //tick: "./src/scripts/tick.js",
    //jsx: "./src/scripts/jsx.js",
    //handlingEvents: "./src/scripts/handlingEvents.js",
    //conditionalRendering: "./src/scripts/conditionalRendering.js",
    //listsAndKeys: "./src/scripts/listsAndKeys.js",
    //forms: "./src/scripts/forms.js",
    //liftingStateUp: "./src/scripts/liftingStateUp.js",
    //compositionInheritance: "./src/scripts/compositionInheritance.js",
    //lightTheme: "./src/scripts/lightTheme.js",
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
    //loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
    include: scssPath,
    loader: ExtractTextPlugin.extract(["css?sourceMap", "sass"])
};

//var extractScss = new ExtractTextPlugin("css/[name].css");
loaderProd = {
    test: /\.scss$/,
    exclude: /(node_modules|bower_components)/,
    include: scssPath,
    loader: ExtractTextPlugin.extract(["css?sourceMap", "sass"])
};
loaderScss = debug ? loaderDev : loaderProd;
loaders.push(loaderScss);

loader = [
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
];
loaders = loaders.concat(loader);

moduleObj.loaders = loaders;


/*
 * plugins
 */
var plugins = [];
plugins.push(new ExtractTextPlugin("css/[name].css"));

plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery'
    })
);


module.exports = {
    devtool: "inline-source-map",
    entry: entry,
    output: output,
    module: moduleObj,
    plugins: plugins,
    devServer: {
        contentBase: "./",
        host: '127.0.0.1',
        port: 9999,
        publicPath: output.publicPath,
    }
};
