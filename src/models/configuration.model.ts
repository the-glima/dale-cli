import {ConfigLogColor} from './config-log-colors.model'

interface ConfigurationCommands {
  commands: {
    [key: string]: string
  }
}

interface Configuration {
  logo: boolean
  logColor: ConfigLogColor
  commands: ConfigurationCommands
  images: string[]
}

export {Configuration, ConfigurationCommands}
