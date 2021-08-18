module.exports = {
  reactStrictMode: true,
}
module: {
  loaders: [
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
  ]
}