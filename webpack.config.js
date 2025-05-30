const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const basePath = __dirname;
const webpack = require("webpack");

module.exports = (env) => {
  return {
    context: path.join(basePath, "src"),
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      plugins: [new TsconfigPathsPlugin()],
    },
    entry: {
      app: ["./index.tsx", "./styles.scss"],
    },
    devtool: "eval-source-map",
    stats: "errors-only",
    output: {
      filename: "[name].[chunkhash].js",
      publicPath: env.NODE_ENV === "production" ? "./" : "/",
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: "index.html", //Name of file in ./dist/
        template: "index.html", //Name of template in ./src
      }),
    ],
  };
};
