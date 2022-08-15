module.exports = {
  chainWebpack: (config) => {
    config.devServer.headers({
      'Access-Control-Allow-Origin': '*',
    });

    // config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
    //   args[0].rootDirectoryLevel = 1;
    //   return args;
    // });

    config.externals(['@actionanand/utility', 'rxjs']);

    // config.devServer.set('port', 20224);
    // config.output.filename('[name].js');
    // config.output.publicPath('/');

  },

  // chainWebpack: config => {
  //   config.externals(['@actionanand/utility', 'rxjs']);
  // },

  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
}