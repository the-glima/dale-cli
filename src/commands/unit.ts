import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'

export default class Unit extends Command {
  static aliases = ['u']
  static description = 'Run unit tests'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('unit').join('\n')}`
    })
  }

  async run() {
    runCommand({
      name: 'unit',
      message: 'Running Unit Tests',
      oclifCommand: this
    })
  }
}
