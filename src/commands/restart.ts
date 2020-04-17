import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import {envCommandOptions} from '../utils'

export default class Restart extends Command {
  static aliases = ['rs']
  static description = 'Stop and start all containers'

  static flags = {
    env: flags.boolean({
      char: 'e',
      description: 'To use the docker-compose-env.yaml, it will restart our containers using an environment scenario.'
    }),
    commands: flags.boolean({
      char: 'c',
      description: `
        ${config.getConfigCommand('stop').join('\n')}\n
        ${config.getConfigCommand('start').join('\n')}
      `
    })
  }

  async run() {
    const {flags} = this.parse(Restart)

    runCommand({
      name: 'stop',
      message: 'Restarting Containers',
      oclifCommand: this,
      options: envCommandOptions(flags.env)
    })

    runCommand({
      name: 'start',
      oclifCommand: this,
      options: envCommandOptions(flags.env)
    })
  }
}
