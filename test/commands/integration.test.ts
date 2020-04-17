import Integration from '../../src/commands/integration'
import * as helpers from '../helpers'

describe('Run Integration Command', () => {
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

    test('should show Integration output', async () => {
      await Integration.run([])

      const expected = ['DALE-CLI: RUNNING INTEGRATION TESTS', 'node newman.js']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
