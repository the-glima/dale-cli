import Stop from '../../src/commands/stop'
import * as helpers from '../helpers'

describe('Run Stop Command', () => {
  beforeAll(() => helpers.setTestEnv())

  describe('stdout', () => {
    let output: any

    beforeEach(() => {
      output = []

      jest.spyOn(process.stdout, 'write').mockImplementation(val => output.push(val))
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    test('should show Stop output', async () => {
      await Stop.run([])

      const expected = ['DALE-CLI: STOPPING CONTAINERS', 'docker-compose -f docker-compose.yaml down -v --rmi=local']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show Stop output when passing env flag', async () => {
      await Stop.run(['-e'])

      const expected = ['DALE-CLI: STOPPING CONTAINERS', 'docker-compose -f docker-compose-env.yaml down -v --rmi=local']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
