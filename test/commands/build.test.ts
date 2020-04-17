import Build from '../../src/commands/build'
import * as helpers from '../helpers'

describe('Run Build Command', () => {
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

    test('should show build output', async () => {
      await Build.run([])

      const expected = ['DALE-CLI: BUILDING CONTAINERS', 'npx tsc -p tsconfig.build.json']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
