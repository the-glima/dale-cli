import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'

export default class Lint extends Command {
  static aliases = ['l']
  static description = 'Lint code using TSLint'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('lint').join('\n')}`
    })
  }

  async run() {
    runCommand({
      name: 'lint',
      message: 'Linting Code',
      oclifCommand: this
    })
  }
}
