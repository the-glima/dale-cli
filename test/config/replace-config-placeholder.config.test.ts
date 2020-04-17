import {replaceConfigPlaceholder} from '../../src/config/replace-config-placeholder.config'
import {CommandOptions} from '../../src/models/command-options.model'

describe('Config: Replace Placeholder', () => {
  const command = 'echo this is the <%= PATH =%> of this command'

  test('should parse and replace command placeholder', async () => {
    const options: CommandOptions = {
      placeholder: 'PATH',
      replacement: 'foo'
    }

    expect(replaceConfigPlaceholder(command, options)).toBe('echo this is the foo of this command')
  })

  test('should output same command input when not having options', async () => {
    expect(replaceConfigPlaceholder(command, null)).toBe(command)
  })
})
