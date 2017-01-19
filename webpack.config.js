var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var outputPath = path.join(__dirname, "dist"); 
var publicPath = "/dist/";
var scssPath = path.join(__dirname, "src/scss");
var debug = process.env.NODE_ENV !== "production";
var HtmlWebpackPlugin = require("html-webpack-plugin");


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
    filename: "js/[name].[hash].bundle.js",
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

const fontPublicPath = path.join(output.publicPath, "");
const fontOutputPath = path.join(output.path, "");
loader = [
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath},
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath }
];
loaders = loaders.concat(loader);

moduleObj.loaders = loaders;


/*
 * plugins
 */
var plugins = [];
var pluginsProduction = [];

plugins.push(
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
);

if(!debug){
    pluginsProduction = [
        new ExtractTextPlugin("css/[name].[hash].css"),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ] ;
    plugins = plugins.concat(pluginsProduction);
}

plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/templates/frontDesk.html"),
        filename: path.join(output.path, "html/frontDesk.html")
    })
);

module.exports = {
    devtool: debug ? "inline-source-map" : "",
    entry: entry,
    output: output,
    module: moduleObj,
    plugins: plugins,
    devServer: {
        contentBase: "./",
        host: "127.0.0.1",
        port: 9999,
        publicPath: output.publicPath,
    }
};
