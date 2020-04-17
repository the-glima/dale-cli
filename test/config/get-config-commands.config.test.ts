import * as config from '../../src/config/'
import {Configuration} from '../../src/models/configuration.model'
import * as helper from '../helpers'

describe('Config: Get Config Commands', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configRootFile: Configuration = helper.getFixtureRootConfigFile()

  test('should return default config commands value by key', async () => {
    const commands = config.getConfigCommands(configDefaultFile)
    const testCommandOutput = {
      clean: ['echo this is the clean test command from default']
    }
    const superCommandOutput = {
      unit: [
        'unit -f -env this is the first unit test command from default', //
        'unit -ls this is the second unit test command from default'
      ]
    }

    expect(config.getConfigCommand('clean', commands)).toEqual(testCommandOutput.clean)
    expect(config.getConfigCommand('unit', commands)).toEqual(superCommandOutput.unit)
  })

  test('should thrown and error if cannot find command', async () => {
    const commands = config.getConfigCommands(configDefaultFile)

    try {
      config.getConfigCommand('foo', commands)
    } catch (error) {
      const errorStringified = error.toString()

      expect(errorStringified).toMatch("Couldn't find commands for: ")
      expect(errorStringified).toMatch('foo')
      expect(errorStringified).toMatch('in commands configuration.')
    }
  })

  test('should return root config commands value by key', async () => {
    const commands = config.getConfigCommands(configRootFile)

    const expectedOutput = {
      reset: ['echo this is the reset test command from root']
    }

    expect(config.getConfigCommand('reset', commands)).toEqual(expectedOutput.reset)
  })

  test('should fallback commands key|value when there is no config commands set', async () => {
    const configuration = config.getConfigFile()
    const configNullCommands = {
      ...configuration,
      commands: null
    }

    const expected = config.getConfigCommands(configuration)

    expect(config.getConfigCommands(configNullCommands)).toEqual(expected)
  })

  test('should check if commands object contains valid commands', async () => {
    const configuration = config.getConfigFile()
    const configInvalidCommands = {
      ...configuration,
      commands: {
        new: 'this command is invalid'
      }
    }

    const configCommandsMap = 'build, clean, format, integration, lint, start, stop, testcafe, unit'

    try {
      config.isConfigCommandsValid(configInvalidCommands)
    } catch (error) {
      const errorStringified = error.toString()

      expect(errorStringified).toMatch('Invalid command in commands configuration, it should have only the following:')
      expect(errorStringified).toMatch(configCommandsMap)
    }
  })
})
