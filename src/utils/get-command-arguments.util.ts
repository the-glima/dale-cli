import {ConfigArgCommand, configArgCommandsMap} from '../models/config-commands.model'
import * as settings from '../settings'

const getCommandArguments = (cmdName: string, customArgs?: string[]): string[] => {
  if (customArgs && settings.isTestEnv()) {
    process.argv = customArgs
  }

  const [, , ...args] = process.argv
  const cmdArgs = (args.length && args.filter(item => item !== cmdName)) || []

  return cmdArgs
}

const isArgCommand = (command: string): boolean => {
  return configArgCommandsMap.includes(command as ConfigArgCommand)
}

export {getCommandArguments, isArgCommand}
