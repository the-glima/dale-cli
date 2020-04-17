import * as config from '../../src/config/'
import {Configuration} from '../../src/models/configuration.model'
import {settings} from '../../src/settings'
import * as helper from '../helpers'

describe('Config: Get Config Log Color', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configRootFile: Configuration = helper.getFixtureRootConfigFile()

  test('should return default config color value', async () => {
    expect(config.getConfigLogColor(configDefaultFile)).toEqual('magenta')
  })

  test('should return root config color value', async () => {
    expect(config.getConfigLogColor(configRootFile)).toEqual('red')
  })

  test('should return default color when there is no config color', async () => {
    const configNullLogColor = {
      ...configDefaultFile,
      logColor: null
    }

    expect(config.getConfigLogColor(configNullLogColor)).toEqual(settings.logColor)
  })
})
