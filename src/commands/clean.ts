import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import {cleanImageCond} from '../utils/clean-images-cond.util'

export default class DockerClean extends Command {
  static aliases = ['c']
  static description = 'Remove images and associated containers'

  static flags = {
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('clean').join('\n')}`
    }),
    image: flags.string({
      char: 'i',
      description: 'Specify a image name to be removed'
    })
  }

  async run() {
    const {flags} = this.parse(DockerClean)

    cleanImageCond(flags.image, this, (commandOptions: any) => {
      runCommand({...commandOptions})
    })
  }
}
