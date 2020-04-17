import {settings} from '../../src/settings'
import {envCommandOptions} from '../../src/utils/env-command-options.util'

describe('Util: Env Command Options', () => {
  beforeAll(() => {
    settings.dockerComposeSuffix.local = 'local'
    settings.dockerComposeSuffix.env = 'env'
  })

  test('should return command options with env value', async () => {
    const expected = {
      placeholder: 'ENV',
      replacement: 'env'
    }
    expect(envCommandOptions(true)).toEqual(expected)
  })

  test('should return command options with local value', async () => {
    const expected = {
      placeholder: 'ENV',
      replacement: 'local'
    }
    expect(envCommandOptions(false)).toEqual(expected)
  })
})
