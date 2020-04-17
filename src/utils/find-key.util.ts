export const findKey = (key: string, object: any) => {
  const found = Object.keys(object).find((item: string) => {
    if (item === key) {
      return object
    }
  })

  return found ? object[found] : null
}
