import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './route'
import { createPinia } from 'pinia'
import { i18n } from './locales'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(i18n)
  .mount('#app')
