import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'

export default class Integration extends Command {
  static aliases = ['i']
  static description = 'Run integration tests using Newman'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('integration').join('\n')}`
    })
  }

  async run() {
    runCommand({
      name: 'integration',
      message: 'Running Integration Tests',
      oclifCommand: this
    })
  }
}
