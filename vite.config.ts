import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import transformerDirective from '@unocss/transformer-directives'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue']
    }),
    Unocss({
      presets: [
        presetUno(),
        presetIcons()
      ],
      transformers: [transformerDirective()]
    })
  ]
})
