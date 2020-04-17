import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'

export default class Build extends Command {
  static aliases = ['b']
  static description = 'Build all containers'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('build').join('\n')}`
    })
  }

  async run() {
    runCommand({
      name: 'build',
      message: 'Building Containers',
      oclifCommand: this
    })
  }
}
