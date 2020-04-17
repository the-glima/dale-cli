import chalk from 'chalk'

import {settings} from '../../src/settings'

export const setTestEnv = () => {
  chalk.enabled = false
  settings.env = 'test'
}
