import {getConfigFile} from '../config/get-config-file.config'
import {settings} from '../settings'
import {findKey} from '../utils/find-key.util'

export const getConfigLogo = (config?: any): boolean => {
  config = config || getConfigFile()
  const logo = config && findKey('logo', config)

  return logo !== null ? logo : settings.logo
}
