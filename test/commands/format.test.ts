import Format from '../../src/commands/format'
import * as helpers from '../helpers'

describe('Run Format Command', () => {
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

    test('should show Format output', async () => {
      await Format.run([])

      const expected = ['DALE-CLI: FORMATTING CODE', 'npx prettier --write "{src,test}/**/*.ts"']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
