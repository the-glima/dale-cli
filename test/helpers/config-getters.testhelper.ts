import * as path from 'path'

import * as config from '../../src/config/'
import {Configuration} from '../../src/models/configuration.model'

const getFixtureConfigFile = (fixturePath: string) => {
  const configDefaultTestPath = path.resolve(__dirname, fixturePath)

  return config.getConfigFile(configDefaultTestPath)
}

const getFixtureDefaultConfigFile = () => getFixtureConfigFile('../fixtures/defaultrc-config.fixture.json')
const getFixtureRootConfigFile = () => getFixtureConfigFile('../fixtures/rootrc-config.fixture.json')
const getFixturePackageJson = () => path.resolve(__dirname, '../fixtures/package-json.json')

export {getFixtureConfigFile, getFixtureDefaultConfigFile, getFixtureRootConfigFile, getFixturePackageJson}
