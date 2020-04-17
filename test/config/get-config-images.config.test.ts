import * as config from '../../src/config'
import {Configuration} from '../../src/models/configuration.model'
import * as helper from '../helpers'

describe('Config: Get Config Images', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configRootFile: Configuration = helper.getFixtureRootConfigFile()

  test('should return default config image', async () => {
    expect(config.getConfigImages(configDefaultFile)).toEqual(['first-image', 'second-image'])
  })

  test('should ignore non string value and return default config image', async () => {
    const configInvalidValues = {
      ...configDefaultFile,
      images: [false, true, {value: 'bar'}, ['image', 'image-01'], 'default-image', 'another-image']
    }

    expect(config.getConfigImages(configInvalidValues)).toEqual(['default-image', 'another-image'])
  })

  test('should return null for root config image', async () => {
    expect(config.getConfigImages(configRootFile)).toBeNull()
  })
})
