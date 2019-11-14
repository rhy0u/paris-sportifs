import convict from 'convict'

const config = convict({
  env: {
    env: 'NODE_ENV',
    default: 'development'
  },
  server: {
    port: {
      env: 'PORT',
      default: 8000
    }
  }
})

config.validate()

export default config
