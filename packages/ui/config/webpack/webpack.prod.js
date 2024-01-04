import webpackBase from "./webpack.base.js";
import { merge } from "webpack-merge";
import webpackProd from "webpackrc/webpack.prod.js";

export default merge(webpackBase, webpackProd);
