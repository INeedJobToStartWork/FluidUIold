import { fork } from "child_process";
import { merge } from "webpack-merge";
import webpackDev from "webpackrc/webpack.dev.js";

export default merge(webpackDev, {
  externals: { "zlib-sync": "zlib-sync" },
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.assetEmitted.tap(
          "MyPlugin",
          (file, { content, source, outputPath, compilation, targetPath }) => {
            if (file === "main.cjs") {
              fork(targetPath, { stdio: "inherit" });
            }
          }
        );
      }
    }
  ]
});
