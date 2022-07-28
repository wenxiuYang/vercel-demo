const path = require('path');

const config = {
  projectName: 'vercel-demo',
  date: '2021-11-10',
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [{ from: 'src/api', to: `dist/${process.env.TARO_ENV}/api` }],
    options: {},
  },
  framework: 'react',
  sass: {},
  alias: {
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@services': path.resolve(__dirname, '..', 'src/services'),
    '@models': path.resolve(__dirname, '..', 'src/models'),
    '@store': path.resolve(__dirname, '..', 'src/store'),
    'bn.js': path.resolve(__dirname, '..', 'node_modules/bn.js'),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    devServer: {
      hot: false,
    },
  },
  plugins: ['@tarojs/plugin-html'],
};

module.exports = function(merge) {
  console.log(process.env.NODE_ENV);
  switch (process.env.NODE_ENV) {
    case 'development':
      return merge({}, config, require('./dev'));
    case 'uat':
      return merge({}, config, require('./uat'));
    case 'production':
      return merge({}, config, require('./prod'));
    default:
      return merge({}, config, require('./prod'));
  }
};
