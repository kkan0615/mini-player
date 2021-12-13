import { createApp } from 'vue'
import App from './App.vue'
/* Store */
import { store } from '@/store'
/* Router */
import { router } from '@/router'
/* Add default index scss */
import './styles/index.scss'
/* Tailwind */
import '@/styles/tailwind.scss'
/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
/* Vueform/multiselect */
// import '@vueform/multiselect/themes/default.scss'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .mount('#app')
