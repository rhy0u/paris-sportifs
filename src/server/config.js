import convict from 'convict'

const config = convict({
  env: {
    env: 'NODE_ENV',
    default: 'development',
  },
  server: {
    port: {
      env: 'PORT',
      default: 8000,
    },
    assets: {
      webpackAssets: {
        doc: 'Use webpack-assets.json file',
        format: Boolean,
        default: false,
        env: 'WEBPACK_ASSETS',
      },
      main: {
        js: {
          doc: 'Main JS file',
          format: String,
          default: '/dist/main.js',
        },
      },
    },
  },
})

config.validate()

export default config
