import {Command, flags} from '@oclif/command'

import * as config from '../config'
import {runCommand} from '../index'
import {CommandOptions} from '../models/command-options.model'
import {settings} from '../settings'

export default class TestCafe extends Command {
  static aliases = ['t']
  static description = 'Stop and start all containers'
  static args = [
    {
      name: 'f',
      description: 'To run a specific fixture'
    },
    {
      name: 't',
      description: 'To run a single specific test'
    }
  ]

  static flags = {
    url: flags.string({
      char: 'u',
      description: 'To run TestCafe tests in dev environment'
    }),
    commands: flags.boolean({
      char: 'c',
      description: `${config.getConfigCommand('testcafe').join('\n')}`
    })
  }

  async run() {
    const {flags} = this.parse(TestCafe)

    const testcafeUrlSettings = settings.commands.testcafe.url
    let commandMessage = 'Running TestCafe Tests'

    const commandOptions: CommandOptions = {
      placeholder: 'URL',
      replacement: testcafeUrlSettings.local
    }

    if (flags.url === testcafeUrlSettings.dev.name) {
      commandOptions.replacement = testcafeUrlSettings.dev.value
      commandMessage = `${commandMessage} ${testcafeUrlSettings.dev.name}`
    }

    if (flags.url === testcafeUrlSettings.acc.name) {
      commandOptions.replacement = testcafeUrlSettings.acc.value
      commandMessage = `${commandMessage} ${testcafeUrlSettings.acc.name}`
    }

    if (flags.url === testcafeUrlSettings.prod.name) {
      commandOptions.replacement = testcafeUrlSettings.prod.value
      commandMessage = `${commandMessage} ${testcafeUrlSettings.prod.name}`
    }

    runCommand({
      name: 'testcafe',
      message: commandMessage,
      oclifCommand: this,
      options: commandOptions
    })
  }
}
