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
/* i18n */
import i18n from '@/locale'
// import FontAwesomeIcon from '@/utils/libs/fontAwesomeIcon'
/* Vueform/multiselect */
// import '@vueform/multiselect/themes/default.scss'

const app = createApp(App)
app
  .use(i18n)
  .use(store)
  .use(router)
  // .component('font-awesome-icon', FontAwesomeIcon) // Add fontAwesomeIcon component globally
  .mount('#app')
