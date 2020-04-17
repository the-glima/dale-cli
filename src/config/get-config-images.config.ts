import {findKey} from '../utils/find-key.util'

import {getConfigFile} from './get-config-file.config'

export const getConfigImages = (config?: any): string[] | null => {
  config = config || getConfigFile()
  const imageArray = findKey('images', config)
  const imageValue = imageArray && imageArray.length > 0 ? imageArray : null
  const imageFilteredValues = imageValue && imageValue.filter((val: any) => !!val && typeof val === 'string')

  return imageFilteredValues && imageFilteredValues.length ? imageFilteredValues : null
}
