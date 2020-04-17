import {getPackageNameTrimmed} from '../../src/config/get-package-json-name-trimmed.config'
import * as helper from '../helpers'

describe("Config: Get Package's Json Name Trimmed", () => {
  const packageJson = helper.getFixturePackageJson()

  test('should get and trim package\'s name', async () => {
    expect(getPackageNameTrimmed(packageJson)).toBe('test-package')
  })

  test('should get root package name if cannot find default package json', async () => {
    expect(getPackageNameTrimmed(undefined)).toBe('dale-cli')
  })
})
