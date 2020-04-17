import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'

export default class Format extends Command {
  static aliases = ['f']
  static description = 'Format code using Prettier'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('format').join('\n')}`
    })
  }

  async run() {
    runCommand({
      name: 'format',
      message: 'Formatting Code',
      oclifCommand: this
    })
  }
}
