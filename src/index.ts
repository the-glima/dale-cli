import {Command, run} from '@oclif/command'
import chalk from 'chalk'
import {spawnSync} from 'child_process'

import * as config from './config/'
import {CommandOptions} from './models/command-options.model'
import * as settings from './settings'
import * as util from './utils/'

interface CommandArgs {
  name: string
  message?: string
  oclifCommand: Command
  options?: CommandOptions | null
}

const runCommand = ({name, oclifCommand, message, options}: CommandArgs): void => {
  const cmdArgs = util.getCommandArguments(name)
  const command = config.getConfigCommand(name)

  if (!Array.isArray(command)) {
    throw new Error(`Commands for ${chalk.red.bold(name)} should be defined in a array`)
  }

  if (message) util.logCommandMessage(oclifCommand, message)

  command.forEach((cmd: any) => {
    const cmdParsed = config.replaceConfigPlaceholder(cmd, options)
    const cmdReplaced = util.replaceNpmCommand(cmdParsed)

    if (!settings.isTestEnv()) {
      if (util.isArgCommand(name)) {
        oclifCommand.log(`${chalk.gray(cmdReplaced)} ${chalk.gray(...cmdArgs)}\n`)

        spawnSync(cmdReplaced, cmdArgs, {
          stdio: 'inherit',
          shell: true
        })
      } else {
        oclifCommand.log(`${chalk.gray(cmdReplaced)}\n`)

        spawnSync(cmdReplaced, {
          stdio: 'inherit',
          shell: true
        })
      }
    } else {
      oclifCommand.log(`${chalk.gray(cmdReplaced)}\n`)
    }
  })
}

export {run, runCommand}
