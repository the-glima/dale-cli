import * as path from 'path'

import * as config from '../../src/config/'
import {Configuration} from '../../src/models/configuration.model'
import * as helper from '../helpers'

describe('Config: Get Config File', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configRootFile: Configuration = helper.getFixtureRootConfigFile()

  test('should read and return root parsed configuration', async () => {
    expect(configRootFile).toMatchSnapshot()
  })

  test('should read and return default parsed configuration', async () => {
    expect(configDefaultFile).toMatchSnapshot()
  })

  test("should get default config when can't find the root one", async () => {
    let configDefault: any

    try {
      configDefault = config.getConfigFile(path.resolve(__dirname, 'rootrc.config.json'))
    } catch {}

    expect(configDefault).toMatchSnapshot()
  })

  test("should throw an error if can't find any config file", async () => {
    try {
      helper.getFixtureConfigFile('root-not-found.config.json')
    } catch {
      try {
        helper.getFixtureConfigFile('default-not-found.config.json')
      } catch (error) {
        const errorStringified = error.toString()

        expect(errorStringified).toMatch("Couldn't find")
        expect(errorStringified).toMatch('default-not-found.config.json')
        expect(errorStringified).toMatch('file, you need to create one.')
      }
    }
  })
})
