module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  chainWebpack: config => {
    config.module
      .rule('csv-loader')
      .test(/\.csv$/)
      .use('csv-loader')
        .loader('csv-loader')
        .options({
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        })
  }

}