import {readPackageJson} from './read-package-json.config'

export const getPackageNameTrimmed = (packageJsonPath?: string): string | null => {
  const regex = /(?!.*\/).+/
  const packageJsonName = readPackageJson('name', packageJsonPath)
  const name = regex.exec(packageJsonName)

  return name && name.length ? name[0] : null
}
