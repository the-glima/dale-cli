import {CommandOptions} from '../models/command-options.model'

export const replaceConfigPlaceholder = (cmd: string, options?: CommandOptions | null): string => {
  const regex = /<%=\s+([A-Z]+)\s+=%>/gm
  const regResult = regex.exec(cmd)

  if (options && regResult && regResult[1] === options.placeholder) {
    return cmd.replace(regex, options.replacement)
  }

  return cmd
}
