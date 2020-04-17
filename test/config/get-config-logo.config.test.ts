import * as config from '../../src/config/'
import {Configuration} from '../../src/models/configuration.model'
import {settings} from '../../src/settings'
import * as helper from '../helpers'

describe('Config: Get Config Logo', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configuration: Configuration = config.getConfigFile()

  test('should return default config logo value', async () => {
    const configTrueLogo = {
      ...configuration,
      logo: true
    }

    expect(config.getConfigLogo(configTrueLogo)).toBeTruthy()
  })

  test('should return root config logo value', async () => {
    const configTrueLogo = {
      ...configuration,
      logo: false
    }

    expect(config.getConfigLogo(configTrueLogo)).toBeFalsy()
  })

  test('should return default logo value when there is no config logo', async () => {
    const configNullLogo = {
      ...configDefaultFile,
      logo: null
    }

    expect(config.getConfigLogo(configNullLogo)).toEqual(settings.logo)
  })
})
