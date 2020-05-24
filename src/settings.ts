import * as path from 'path'

const ENV = {
  dev: 'development',
  prod: 'production',
  test: 'test'
}

const settings = {
  env: ENV.dev,
  packageJsonPath: {
    default: path.resolve(__dirname, '../package.json'),
    root: path.resolve(process.cwd(), 'package.json')
  },
  configPath: {
    default: path.resolve(__dirname, '../.dalerc.json'),
    root: path.resolve(process.cwd(), '.dalerc.json')
  },
  logo: true,
  logColor: 'blue',
  dockerComposeSuffix: {
    local: '',
    env: '-env'
  },
  commands: {
    testcafe: {
      url: {
        local: 'http://localhost:3000/',
        dev: {name: 'dev', value: 'https://ur/'}
      }
    }
  }
}

const isDevEnv = (): boolean => settings.env === ENV.dev
const isProdEnv = (): boolean => settings.env === ENV.prod
const isTestEnv = (): boolean => settings.env === ENV.test

export {settings, isDevEnv, isProdEnv, isTestEnv}
