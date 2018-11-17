export const removeSpecifiedElementFromArray = (array, element) => {
  const index = array.indexOf(element)
  if (index !== -1) {
    return [...array.slice(0, index), ...array.slice(index + 1, array.length)]
  }
  return array.slice(0)
}
