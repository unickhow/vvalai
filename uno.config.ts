import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetWind3, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    'is-button': 'py-1 px-2 text-gray-400 shadow-md border-none bg-white rounded-full cursor-pointer hover:text-gray-700 active:shadow'
  }
})
