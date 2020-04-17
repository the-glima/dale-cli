import * as config from '../config'
import {CommandOptions} from '../models/command-options.model'

const buildCleanOptions = (options: any, context: any) => ({
  name: 'clean',
  message: `Removing image and associated containers => ${options.replacement}`,
  oclifCommand: context,
  options
})

export const cleanImageCond = (flag: any, context: any, callback: (options: any) => void) => {
  const configImage = config.getConfigImages()

  if (flag) {
    const placeholderOptions: CommandOptions = {
      placeholder: 'IMAGE',
      replacement: flag
    }

    const commandOptions = buildCleanOptions(placeholderOptions, context)

    callback(commandOptions)
  } else {
    if (!configImage) {
      context.error("Missing 'image' property in .dalerc.json")

      return false
    }

    configImage.forEach((image: string) => {
      const placeholderOptions: CommandOptions = {
        placeholder: 'IMAGE',
        replacement: image
      }

      const commandOptions = buildCleanOptions(placeholderOptions, context)

      callback(commandOptions)
    })
  }
}
