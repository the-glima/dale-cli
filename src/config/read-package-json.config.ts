import chalk from 'chalk'
import {readFileSync} from 'fs'

import {settings} from '../settings'

export const readPackageJson = (key: string, packageJsonPath?: string): any => {
  let packageJson: any

  try {
    packageJson = readFileSync(packageJsonPath || settings.packageJsonPath.root, 'utf8')
  } catch (error) {
    throw new Error(`Couldn\'t find ${chalk.red.bold(error.path)} file, please check if the file was renamed or deleted.`)
  }

  return JSON.parse(packageJson)[key] || null
}
