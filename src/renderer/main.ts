import { createApp } from 'vue'
import App from './App.vue'

/* Add global styles */
import './styles/index.scss'
/* Import quasar */
import { Quasar } from 'quasar'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
/* Router */
import { router } from '@/router'
/* Localization */
import { i18n } from '@/locales'
/* store */
import pinia from '@/store'

const app = createApp(App)
app.use(Quasar, {
  plugins: {

  }, // import Quasar plugins and add here
})
app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
