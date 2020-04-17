import {replaceNpmCommand} from '../../src/utils/replace-npm-command.util'

describe('Util: Npm Command', () => {
  test('should replace NPM command bases on OS', async () => {
    const command = 'npm run lint'

    expect(replaceNpmCommand(command, 'linux')).toBe(command)
    expect(replaceNpmCommand(command, 'android')).toBe(command)
    expect(replaceNpmCommand(command, 'cygwin')).toBe(command)
    expect(replaceNpmCommand(command, 'win32')).toBe('npm.cmd run lint')
  })
})
