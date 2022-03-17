import { createI18n } from 'vue-i18n'
import type { UserModule } from '../types'
import en from '../locales/en.json'
import zhTw from '../locales/zh-tw.json'

const messages = {
  en,
  'zh-tw': zhTw
}

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })

  app.use(i18n)
}
