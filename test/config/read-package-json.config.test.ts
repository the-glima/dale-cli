import {readPackageJson} from '../../src/config/read-package-json.config'
import * as helper from '../helpers'

describe('Config: Read Package Json', () => {
  const packageJson = helper.getFixturePackageJson()

  test('should parse and replace command placeholder', async () => {
    expect(readPackageJson('name', packageJson)).toBe('@project/test-package')
  })
})
