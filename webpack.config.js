const path = require("path");
const webpack = require('webpack');

const standard = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2020",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
};

module.exports = [
  //Web library
  {
    ...standard,
    entry: `./src/invoker.ts`,
    target: ["web"],
    output: {
      filename: "insitux.lib.min.js",
      path: path.resolve(__dirname, "out"),
      library: {
        name: "insitux",
        type: "window",
        export: "invoker",
      }
    },
    optimization: { minimize: true },
  },
  //Web
  {
    ...standard,
    entry: `./src/web.ts`,
    target: ["web"],
    output: {
      filename: "insitux.min.js",
      path: path.resolve(__dirname, "out"),
    },
    optimization: { minimize: true },
  },
  //NodeJS
  {
    ...standard,
    entry: `./src/repl.ts`,
    target: ["node"],
    output: {
      filename: "repl.js",
      path: path.resolve(__dirname, "out"),
    },
    plugins: [
      new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    ],
    optimization: { minimize: false },
  },
  //Web tokenise
  {
    ...standard,
    entry: `./src/parse.ts`,
    target: ["web"],
    output: {
      filename: "insitux-tokenise.js",
      path: path.resolve(__dirname, "out"),
      library: {
        name: "insituxTokenise",
        type: "window",
        export: "tokenise",
      }
    },
    optimization: { minimize: true },
  },
  //Scriptable
  {
    ...standard,
    entry: `./src/invoker.ts`,
    target: ["web"],
    output: {
      filename: "insitux-scriptable.js",
      path: path.resolve(__dirname, "out"),
      library: {
        type: "commonjs-module",
      },
    },
    optimization: { minimize: true },
  },
  {
    ...standard,
    entry: `./src/invoker.ts`,
    target: ["web"],
    output: {
      filename: "insitux-apps-script.js",
      path: path.resolve(__dirname, "out"),
      library: {
        name: "insitux",
        type: "assign-properties",
      },
    },
  },
];
