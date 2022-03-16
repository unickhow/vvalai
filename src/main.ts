import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './route'
import { createPinia } from 'pinia'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .mount('#app')
