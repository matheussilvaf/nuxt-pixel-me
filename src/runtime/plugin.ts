import { defineNuxtPlugin } from '#app'
import { basePixelCodeInitializer } from '../utils/basePixelCodeInitializer'
import { FbMePixel } from '../utils/FbMePixel'
// @ts-expect-error virtual template
import pixelMeVueConig from '#build/pixel-me/vue-config.mjs'

let w
let d
if (typeof window !== 'undefined') {
  w = window
  d = document
}
const basePixelCodeArgs = [
  'script',
  'https://connect.facebook.net/en_US/fbevents.js'
] as const

export default defineNuxtPlugin((nuxtApp) => {
  basePixelCodeInitializer(w, d, ...basePixelCodeArgs)

  const instance = new FbMePixel(pixelMeVueConig)

  console.log(pixelMeVueConig)

  return {
    provide: {
      pixelMe: instance
    }
  }
})
