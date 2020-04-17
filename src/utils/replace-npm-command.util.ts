const replaceNpmCommand = (command: string, processPlatform = process.platform): string => {
  const regex = /^npm\s+/gm
  const npmCommand = /^win/.test(processPlatform) ? 'npm.cmd ' : 'npm '

  return regex.test(command) ? command.replace(regex, npmCommand) : command
}
export {replaceNpmCommand}
