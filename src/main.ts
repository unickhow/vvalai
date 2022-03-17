import App from './App.vue'
import 'uno.css'
import { ViteSSG } from 'vite-ssg'

import { routes } from './route'

export const createApp = ViteSSG(
  App,
  {
    routes
  },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
    // if (ctx.isClient) {
    //   ctx.router.beforeEach((to, from) => {
    //     console.log('beforeEach', to, from)
    //   })
    // }
  }
)
