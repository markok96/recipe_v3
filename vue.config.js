module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/recipe_v3/'  // This is whatever your path from the root is
    : '/'
}