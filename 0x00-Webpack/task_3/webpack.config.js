const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, "./modules/header/header.js"),
    body: path.resolve(__dirname, "./modules/body/body.js"),
    footer: path.resolve(__dirname, "./modules/footer/footer.js"),
    main: path.resolve(__dirname, "./js/dashboard_main.js"),
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/", // This is the new property for serving static content
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CleanWebpackPlugin(), // Clean build folder on each build
  ],
  devServer: {
    // Add any additional devServer configuration as needed
    port: 8564,
    hot: true, // Enable hot module replacement (HMR)
    historyApiFallback: true, // For SPA to fallback to index.html on 404
  },
};
