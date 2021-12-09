import { createApp } from 'vue'
import App from './App.vue'
/* Store */
import { store } from '@/store'

const app = createApp(App)
app
  .use(store)

// /* Bootstrap */
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// /* Tailwind */
// import '@/styles/tailwind.scss'
// import '@/styles/index.scss'