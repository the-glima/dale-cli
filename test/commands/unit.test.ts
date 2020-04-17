import Unit from '../../src/commands/unit'
import * as helpers from '../helpers'

describe('Run Unit Command', () => {
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

    test('should show Unit output', async () => {
      await Unit.run([])

      const expected = ['DALE-CLI: RUNNING UNIT TESTS', 'npx jest --runInBand --testPathIgnorePatterns=submodules']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
