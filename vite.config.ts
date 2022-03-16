import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import transformerDirective from '@unocss/transformer-directives'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
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
      transformers: [transformerDirective()],
      shortcuts: {
        'is-button': 'py-1 px-2 text-gray-400 shadow-md border-none bg-white rounded-full cursor-pointer hover:text-gray-700 active:shadow'
      }
    })
  ]
})
