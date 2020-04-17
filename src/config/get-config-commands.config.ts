import chalk from 'chalk'

import {ConfigCommand, configCommandsMap} from '../models/config-commands.model'
import {settings} from '../settings'
import {findKey} from '../utils/find-key.util'

import {getConfigFile} from './get-config-file.config'

const isConfigCommandsValid = (commands: any): boolean => {
  return Object.keys(commands).every((cmd: string) => configCommandsMap.includes(cmd as ConfigCommand))
}

const getConfigCommands = (config?: any): string[] => {
  config = config || getConfigFile(config)
  const defaultCommands = findKey('commands', getConfigFile(settings.configPath.default))
  let commands = findKey('commands', config)

  if (commands && !isConfigCommandsValid(commands)) {
    throw new Error(
      `Invalid command in commands configuration, it should have only the following: ${chalk.red.bold([...configCommandsMap].join(', '))}.`
    )
  }

  if (!defaultCommands) {
    throw new Error(`Couldn't find ${chalk.red.bold('commands')} key in configuration file.`)
  }

  return {
    ...defaultCommands,
    ...commands
  }
}

const getConfigCommand = (key: string, commands?: any): string[] => {
  commands = commands || getConfigCommands()
  const command = findKey(key, commands)

  if (!command) {
    throw new Error(`Couldn't find commands for: ${chalk.red.bold(key)} in commands configuration.`)
  }

  return command
}

export {getConfigCommand, getConfigCommands, isConfigCommandsValid}
