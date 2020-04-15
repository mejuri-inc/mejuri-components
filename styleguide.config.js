module.exports = {
  components: 'src/components/*/index.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  pagePerSection: true,
};
