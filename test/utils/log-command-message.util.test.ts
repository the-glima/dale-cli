import {logCommandMessage} from '../../src/utils/log-command-message.util'
import * as helper from '../helpers'

describe('Util: Log Command Message', () => {
  test('should return log message with project name', async () => {
    const packageJson = helper.getFixturePackageJson()
    const expected = 'TEST-PACKAGE: DEFAULT COMMAND RUNNING'

    expect(logCommandMessage(null, 'Default Command Running', null, packageJson)).toMatch(expected)
  })

  test('should return log message with fallback project name', async () => {
    const expected = 'DALE-CLI: FALLBACK COMMAND RUNNING'

    expect(logCommandMessage(null, 'Fallback Command Running', null, null)).toMatch(expected)
  })
})
