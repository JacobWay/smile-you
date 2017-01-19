import path from "path";
import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../webpack.config.js";

const compiler = webpack(config);
const app = express();

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true,
});

app.use(webpackHotMiddleware(compiler));
app.use(devMiddleware);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/frontDesk.html"));
});

app.listen(9999, "localhost");
