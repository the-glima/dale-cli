import {Command} from '@oclif/command'

import {cleanImageCond} from '../../src/utils/clean-images-cond.util'

describe('Util: Clean Image Conditional', () => {
  test('should call cleanImageCond when passing flag arg true', async () => {
    const cleanOptions = {
      name: 'clean',
      message: 'Removing image and associated containers => Foo',
      oclifCommand: Command,
      options: {
        placeholder: 'IMAGE',
        replacement: 'Foo'
      }
    }

    const callBack = jest.fn()

    cleanImageCond('Foo', Command, callBack)
    expect(callBack).toHaveBeenCalledTimes(1)
    expect(callBack).toHaveBeenCalledWith(cleanOptions)
  })

  test('should call cleanImageCond when passing flag arg false', async () => {
    // Image names comes from image array property in .dalerc.json
    const cleanOptionsFoo = {
      name: 'clean',
      message: 'Removing image and associated containers => foo',
      oclifCommand: Command,
      options: {
        placeholder: 'IMAGE',
        replacement: 'foo'
      }
    }

    const cleanOptionsBar = {
      name: 'clean',
      message: 'Removing image and associated containers => bar',
      oclifCommand: Command,
      options: {
        placeholder: 'IMAGE',
        replacement: 'bar'
      }
    }

    const callBack = jest.fn()

    cleanImageCond(false, Command, callBack)
    expect(callBack).toHaveBeenCalledTimes(2)
    expect(callBack).toHaveBeenCalledWith({...cleanOptionsFoo})
    expect(callBack).toHaveBeenCalledWith({...cleanOptionsBar})
  })
})
