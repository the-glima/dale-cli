import {Hook} from '@oclif/config'
import chalk from 'chalk'

import {getConfigLogo} from '../../config/get-config-logo.config'

// Font Name: FIGIet  Rectangles
// URL: http://patorjk.com/software/taag/#p=display&f=Rectangles&t=Type%20Something%20

const ASCII = `
${chalk.gray(' __ ')} ${chalk.green.bold(' ____')}  ${chalk.magenta.bold('_____')}${chalk.blue.bold(' __')}   ${chalk.yellow.bold(
  ' _____'
)}   ${chalk.gray('__')}
${chalk.gray('|__| ')}${chalk.green.bold('|    \\')}${chalk.magenta.bold('|  _  |')}${chalk.blue.bold('  |')}  ${chalk.yellow.bold(
  '|   __|'
)} ${chalk.gray('|  |')}
${chalk.gray('|  |')} ${chalk.green.bold('|  |  ')}${chalk.magenta.bold('|     |')}${chalk.blue.bold('  |__')}${chalk.yellow.bold(
  '|   __|'
)} ${chalk.gray('|__|')}
${chalk.gray('|__|')} ${chalk.green.bold('|____/')}${chalk.magenta.bold('|__|__|')}${chalk.blue.bold('_____')}${chalk.yellow.bold(
  '|_____|'
)} ${chalk.gray('|__|')}
\n`.trimLeft()

export const hook: Hook<'init'> = async () => getConfigLogo() && process.stdout.write(`${ASCII}`)
