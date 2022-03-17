import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './route'
import { createPinia } from 'pinia'
import { i18n } from './locales'
import { createHead } from '@vueuse/head'

const head = createHead()
const app = createApp(App)

app
  .use(router)
  .use(head)
  .use(createPinia())
  .use(i18n)
  .mount('#app')
