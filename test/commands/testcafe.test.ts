import TestCafe from '../../src/commands/testcafe'
import * as helpers from '../helpers'

describe('Run TestCafe Command', () => {
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

    test('should show TestCafe output', async () => {
      await TestCafe.run([])

      const expected = ['DALE-CLI: RUNNING TESTCAFE TESTS', 'set FRONTEND_URL=http://localhost:4200/ && npx testcafe --speed 1 chrome ./main.js']

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show TestCafe output when passing dev url flag', async () => {
      await TestCafe.run(['-u=dev'])

      const expected = [
        'DALE-CLI: RUNNING TESTCAFE TESTS DEV',
        'set FRONTEND_URL=https://opsflow.dev.k8s.network.com/ && npx testcafe --speed 1 chrome ./main.js'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show TestCafe output when passing acc url flag', async () => {
      await TestCafe.run(['-u=acc'])

      const expected = [
        'DALE-CLI: RUNNING TESTCAFE TESTS ACC',
        'set FRONTEND_URL=https://opsflow.acc.k8s.network.com/ && npx testcafe --speed 1 chrome ./main.js'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })

    test('should show TestCafe output when passing prod url flag', async () => {
      await TestCafe.run(['-u=prod'])

      const expected = [
        'DALE-CLI: RUNNING TESTCAFE TESTS PROD',
        'set FRONTEND_URL=https://opsflow.prod.k8s.network.com/ && npx testcafe --speed 1 chrome ./main.js'
      ]

      const outputTrimmed = helpers.outputTrim(output)

      expect(outputTrimmed).toEqual(expected)
    })
  })
})
