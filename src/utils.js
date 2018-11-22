import { LIGHT_COLORS } from 'const'
import { DICE_FACES } from 'const/diceFaces'
//images
import agility from 'images/agility.png'
import agilityx2 from 'images/agilityx2.png'
import brain from 'images/brain.png'
import evilFlame from 'images/evilFlame.png'
import fist from 'images/fist.png'
import flame from 'images/flame.png'
import glass from 'images/glass.png'
import gun from 'images/gun.png'
import handShake from 'images/handshake.png'
import healing from 'images/healing.png'
import joker from 'images/joker.png'
import miss from 'images/miss.png'
import placeHolder from 'images/placeholder.png'
import poison from 'images/poison.png'
import shield from 'images/shield.png'
import twoface from 'images/twoface.png'
import unobtainium from 'images/unobtainium.png'


const ICONS = {
  agility,
  agilityx2,
  brain,
  evilFlame,
  fist,
  flame,
  glass,
  gun,
  handShake,
  healing,
  joker,
  miss,
  placeHolder,
  poison,
  shield,
  twoface,
  unobtainium,

}


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

export const randomIconFromDie = (color) => {
  const faces = DICE_FACES[color]
  const alt = shuffle(faces)[0]
  return {
    icon: ICONS[alt],
    alt,
  }
}
