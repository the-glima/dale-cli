import Restart from '../../src/commands/restart'
import * as helpers from '../helpers'

describe('Run Restart Command', () => {
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

    test('should show Restart output', async () => {
      await Restart.run([])

      const expected = [
        'DALE-CLI: RESTARTING CONTAINERS',
        'docker-compose -f docker-compose.yaml down -v --rmi=local',
        'docker network ls | grep payvision || docker network create -d bridge payvision',
        'docker-compose -f docker-compose.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show Restart output when passing env flag', async () => {
      await Restart.run(['-e'])

      const expected = [
        'DALE-CLI: RESTARTING CONTAINERS',
        'docker-compose -f docker-compose-env.yaml down -v --rmi=local',
        'docker network ls | grep payvision || docker network create -d bridge payvision',
        'docker-compose -f docker-compose-env.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
