import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhTw from './zh-tw.json'

const messages = {
  en,
  'zh-tw': zhTw
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
