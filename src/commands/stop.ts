import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import {envCommandOptions} from '../utils'

export default class Stop extends Command {
  static aliases = ['st']
  static description = 'Stops SQLServer container'

  static flags = {
    env: flags.boolean({
      char: 'e',
      description: 'To use the docker-compose-env.yaml, it will stop our containers using an environment scenario.'
    }),
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('stop').join('\n')}`
    })
  }

  async run() {
    const {flags} = this.parse(Stop)

    runCommand({
      name: 'stop',
      message: 'Stopping Containers',
      oclifCommand: this,
      options: envCommandOptions(flags.env)
    })
  }
}
