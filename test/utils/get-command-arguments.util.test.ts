import {getCommandArguments, isArgCommand} from '../../src/utils/get-command-arguments.util'
import * as helpers from '../helpers'

describe('Util: Get Command Arguments', () => {
  beforeAll(() => helpers.setTestEnv())

  test('getCommandArguments: should return commands arguments', async () => {
    const customArgs = ['_', '__', '-foo', '--bar', 'verbose']
    const expected = ['-foo', '--bar', 'verbose']

    expect(getCommandArguments('unit', customArgs)).toEqual(expected)
  })

  test('isArgCommand: should return true or false depending if the command is an arg command', async () => {
    expect(isArgCommand('build')).toBeTruthy()
    expect(isArgCommand('clean')).toBeFalsy()
    expect(isArgCommand('unit')).toBeTruthy()
    expect(isArgCommand('integration')).toBeTruthy()
    expect(isArgCommand('start')).toBeFalsy()
    expect(isArgCommand('restart')).toBeFalsy()
  })
})
