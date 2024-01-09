module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}