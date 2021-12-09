import { createApp } from 'vue'
import App from './App.vue'
/* Store */
import { store } from '@/store'
/* Router */
import { router } from '@/router'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .mount('#app')

// /* Bootstrap */
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// /* Tailwind */
// import '@/styles/tailwind.scss'
// import '@/styles/index.scss'
