import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './route'

const app = createApp(App)

app.use(router).mount('#app')
