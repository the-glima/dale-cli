import chalk from 'chalk'

import {getConfigLogColor} from '../config/get-config-log-color.config'
import {getPackageNameTrimmed} from '../config/get-package-json-name-trimmed.config'

export const logCommandMessage = (oclifCommand: any, logMessage: string, config?: any, packageJsonPath?: any): any => {
  const configProjectName = getPackageNameTrimmed(packageJsonPath)
  const projectName = configProjectName ? configProjectName.toUpperCase() : ''
  logMessage = logMessage ? logMessage.toUpperCase() : ''

  const message = `${chalk[getConfigLogColor(config)]['bold'](`${projectName}: ${logMessage}`)}`

  if (oclifCommand) oclifCommand.log(`${message}`)

  return message
}
