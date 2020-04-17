import Clean from '../../src/commands/clean'
import * as helpers from '../helpers'

describe('Run Clean Command', () => {
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

    test('should show clean output', async () => {
      await Clean.run([])

      const expected = [
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => FOO',
        'docker ps -aqf name=foo | xargs -n 1 docker rm',
        'docker images foo -q | xargs -n 1 docker rmi',
        'docker image prune -af',
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => BAR',
        'docker ps -aqf name=bar | xargs -n 1 docker rm',
        'docker images bar -q | xargs -n 1 docker rmi',
        'docker image prune -af'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show clean output when passing an specific image to clean', async () => {
      await Clean.run(['-i', 'image-example'])

      const expected = [
        'DALE-CLI: REMOVING IMAGE AND ASSOCIATED CONTAINERS => IMAGE-EXAMPLE',
        'docker ps -aqf name=image-example | xargs -n 1 docker rm',
        'docker images image-example -q | xargs -n 1 docker rmi',
        'docker image prune -af'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
