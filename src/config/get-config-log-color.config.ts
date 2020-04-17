import {getConfigFile} from '../config/get-config-file.config'
import {ConfigLogColor} from '../models/config-log-colors.model'
import {settings} from '../settings'
import {findKey} from '../utils/find-key.util'

export const getConfigLogColor = (config?: any): ConfigLogColor => {
  config = config || getConfigFile()
  const logColor = findKey('logColor', config)

  return logColor ? logColor : settings.logColor
}
