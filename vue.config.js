const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [
    // other js file
  ],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  devServer: {
    before: app => {
      //app.use('/api',mockRouter);
      // require('./_mock/s-table.tsx');
      // mockRouter
    },//require('_mock/index'),
  },
  chainWebpack: config => {

    /*
    config.module
        .rule('tsx')
        .test(/\.tsx?$/)
        .use('tslint-loader')
            .loader('tslint-loader');

    config.module
        .rule('vuetsx')
        .test(/\.tsx?$/)
        .use('babel-loader')
            .loader('babel-loader')
            .tap(opt=>{
                opt={};
                Object.assign(opt,{
                    appendTsxSuffixTo: [/\.vue$/]
                });
                return opt;
            });
            */
  },
  configureWebpack: config => {

    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // new CopyWebpackPlugin([{
          //   from: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr-client.js',
          //   to: 'dist'
          // }, {
          //   from: 'src/lib/abp.js',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.css',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/font-awesome/css/font-awesome.css',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.png',
          //   to: 'dist'
          // }])
        ]
      }
    } else {
      return {
        plugins: [
          // new CopyWebpackPlugin([{
          //   from: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr-client.js',
          //   to: 'dist'
          // }, {
          //   from: 'src/lib/abp.js',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.css',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/font-awesome/css/font-awesome.css',
          //   to: 'dist'
          // }, {
          //   from: 'node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.png',
          //   to: 'dist'
          // }])
        ]
      }
    }
  }
}
