import Lint from '../../src/commands/lint'
import * as helpers from '../helpers'

describe('Run Lint Command', () => {
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

    test('should show lint output', async () => {
      await Lint.run([])

      const expected = ['DALE-CLI: LINTING CODE', 'npx tslint -p tsconfig.json -c tslint.json']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
