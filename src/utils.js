import { LIGHT_COLORS } from 'const'
import { DICE_FACES } from 'const/diceFaces'
import fist from 'images/fist.png'
import flame from 'images/flame.png'
import shield from 'images/fist.png'
import handShake from 'images/fist.png'
import rushingMan from 'images/fist.png'

export const removeSpecifiedElementFromArray = (array, element) => {
  const index = array.indexOf(element)
  if (index !== -1) {
    return [...array.slice(0, index), ...array.slice(index + 1, array.length)]
  }
  return array.slice(0)
}

export const drawXfromBag = (arr, x) => shuffle(arr).slice(0, x)
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  const b = a.slice(0)
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

export const isLight = color => LIGHT_COLORS.includes(color)

const ICONS = {
  fist,
  flame,
}

export const randomIconFromDie = (color) => {
  const faces = DICE_FACES[color]
  const randomIconKey = shuffle(faces)[0]
  return ICONS[randomIconKey]
}
