import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import * as utils from '../utils'
import {cleanImageCond} from '../utils/clean-images-cond.util'

export default class Reset extends Command {
  static aliases = ['r']
  static description = 'Stop, remove and start all containers'

  static flags = {
    env: flags.boolean({
      char: 'e',
      description: 'To use the docker-compose-env.yaml, it will reset our containers using an environment scenario.'
    }),
    commands: flags.boolean({
      char: 'c',
      description: `
        ${config.getConfigCommand('stop').join('\n')}\n
        ${config.getConfigCommand('clean').join('\n')}\n
        ${config.getConfigCommand('start').join('\n')}
      `
    }),
    image: flags.string({
      char: 'i',
      description: 'Specify a image name to be removed'
    })
  }

  async run() {
    const {flags} = this.parse(Reset)

    runCommand({
      name: 'stop',
      message: 'Resetting Containers',
      oclifCommand: this,
      options: utils.envCommandOptions(flags.env)
    })

    cleanImageCond(flags.image, this, (commandOptions: any) => {
      runCommand({...commandOptions})
    })

    runCommand({
      name: 'start',
      oclifCommand: this,
      options: utils.envCommandOptions(flags.env)
    })
  }
}
