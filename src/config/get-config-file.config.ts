import chalk from 'chalk'
import {existsSync, readFileSync} from 'fs'

import {Configuration} from '../models/configuration.model'
import {settings} from '../settings'

export const getConfigFile = (configPath = settings.configPath.root): Configuration => {
  let configFile: any

  try {
    existsSync(configPath)
    configFile = readFileSync(configPath, 'utf8')
  } catch {
    try {
      existsSync(settings.configPath.default)
      configFile = readFileSync(settings.configPath.default, 'utf8')
    } catch (error) {
      throw new Error(`Couldn\'t find ${chalk.red.bold(error.path)} file, you need to create one.`)
    }
  }

  return JSON.parse(configFile.toString())
}
