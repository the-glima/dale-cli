import {Configuration} from '../../src/models/configuration.model'
import {findKey} from '../../src/utils/find-key.util'
import * as helper from '../helpers'

describe('Util: Find Key', () => {
  const configDefaultFile: Configuration = helper.getFixtureDefaultConfigFile()
  const configRootFile: Configuration = helper.getFixtureRootConfigFile()

  test('should return key|value from an object', async () => {
    const object = {
      name: 'John Doe',
      age: 34,
      live: true
    }

    expect(findKey('name', object)).toEqual('John Doe')
    expect(findKey('age', object)).toEqual(34)
    expect(findKey('live', object)).toEqual(true)
  })

  test('should return default config commands value', async () => {
    const expected = {
      clean: ['echo this is the clean test command from default'],
      unit: [
        'unit -f -env this is the first unit test command from default', //
        'unit -ls this is the second unit test command from default'
      ]
    }

    expect(findKey('commands', configDefaultFile)).toEqual(expected)
  })

  test('should return root config commands value', async () => {
    const expected = {
      reset: ['echo this is the reset test command from root']
    }

    expect(findKey('commands', configRootFile)).toEqual(expected)
  })
})
