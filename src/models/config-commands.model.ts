type ConfigCommand =
  | 'build'
  | 'clean'
  | 'format'
  | 'integration'
  | 'lint'
  | 'reset'
  | 'reset-mock'
  | 'restart'
  | 'start'
  | 'stop'
  | 'testcafe'
  | 'unit'

type ConfigArgCommand = 'build' | 'format' | 'integration' | 'lint' | 'testcafe' | 'unit'

const configCommandsMap: Array<ConfigCommand> = [
  'build',
  'clean',
  'format',
  'integration',
  'lint',
  'reset',
  'reset-mock',
  'restart',
  'start',
  'stop',
  'testcafe',
  'unit'
]

const configArgCommandsMap: Array<ConfigArgCommand> = ['build', 'format', 'integration', 'lint', 'testcafe', 'unit']

export {ConfigCommand, ConfigArgCommand, configCommandsMap, configArgCommandsMap}
