import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import {envCommandOptions} from '../utils'

export default class Start extends Command {
  static aliases = ['s']
  static description = 'Create network and starts all containers'

  static flags = {
    env: flags.boolean({
      char: 'e',
      description: 'To use the docker-compose-env.yaml, it will start our containers using an environment scenario.'
    }),
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('start').join('\n')}`
    })
  }

  async run() {
    const {flags} = this.parse(Start)

    runCommand({
      name: 'start',
      message: 'Starting Containers',
      oclifCommand: this,
      options: envCommandOptions(flags.env)
    })
  }
}
