import webpackBase from "./webpack.base.js";
import { fork } from "child_process";
import { merge } from "webpack-merge";
import webpackDev from "webpackrc/webpack.dev.js";

export default merge(webpackDev, webpackBase, {
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.assetEmitted.tap("DevRefresher", (file, { targetPath }) => {
          if (file === "main.cjs") fork(targetPath, { stdio: "inherit" });
        });
      }
    }
  ]
});
