import Start from '../../src/commands/start'
import * as helpers from '../helpers'

describe('Run Start Command', () => {
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

    test('should show Start output', async () => {
      await Start.run([])

      const expected = [
        'DALE-CLI: STARTING CONTAINERS',
        'docker network ls | grep network || docker network create -d bridge network',
        'docker-compose -f docker-compose.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show Start output when passing env flag', async () => {
      await Start.run(['-e'])

      const expected = [
        'DALE-CLI: STARTING CONTAINERS',
        'docker network ls | grep network || docker network create -d bridge network',
        'docker-compose -f docker-compose-env.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
