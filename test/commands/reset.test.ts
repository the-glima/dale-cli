import Reset from '../../src/commands/reset'
import * as helpers from '../helpers'

describe('Run Reset Command', () => {
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

    test.only('should show Reset output', async () => {
      await Reset.run([])

      const expected = [
        'DALE-CLI: RESETTING CONTAINERS',
        'docker-compose -f docker-compose.yaml down -v --rmi=local',
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => FOO',
        'docker ps -aqf name=foo | xargs -n 1 docker rm',
        'docker images foo -q | xargs -n 1 docker rmi',
        'docker image prune -af',
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => BAR',
        'docker ps -aqf name=bar | xargs -n 1 docker rm',
        'docker images bar -q | xargs -n 1 docker rmi',
        'docker image prune -af',
        'docker network ls | grep network || docker network create -d bridge network',
        'docker-compose -f docker-compose.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show Reset output when passing env flag', async () => {
      await Reset.run(['-e'])

      const expected = [
        'DALE-CLI: RESETTING CONTAINERS',
        'docker-compose -f docker-compose-env.yaml down -v --rmi=local',
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => FOO',
        'docker ps -aqf name=foo | xargs -n 1 docker rm',
        'docker images foo -q | xargs -n 1 docker rmi',
        'docker image prune -af',
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => BAR',
        'docker ps -aqf name=bar | xargs -n 1 docker rm',
        'docker images bar -q | xargs -n 1 docker rmi',
        'docker image prune -af',
        'docker network ls | grep network || docker network create -d bridge network',
        'docker-compose -f docker-compose-env.yaml up'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show error when missing image property in dalerc', async () => {
      const errorMessage = new Error("Missing 'image' property in .dalerc.json")

      try {
        await Reset.run([])
      } catch (error) {
        expect(error).toEqual(errorMessage)
      }
    })
  })
})
