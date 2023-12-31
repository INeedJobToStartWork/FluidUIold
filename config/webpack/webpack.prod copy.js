import { merge } from "webpack-merge";
import webpackBase from "webpackrc/webpack.base.js";
import webpackProd from "webpackrc/webpack.prod.js";

export default merge(webpackBase, webpackProd);
