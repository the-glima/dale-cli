import {CommandOptions} from '../models/command-options.model'
import {settings} from '../settings'

export const envCommandOptions = (cond: boolean) => {
  const commandOptions: CommandOptions = {
    placeholder: 'ENV',
    replacement: cond ? settings.dockerComposeSuffix.env : settings.dockerComposeSuffix.local
  }

  return commandOptions
}
