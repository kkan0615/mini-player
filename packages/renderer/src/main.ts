import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
/* Add global styles */
import '@/styles/index.scss'
/* Add Quasar */
import { Quasar } from 'quasar'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.use(router)
app.mount('#app')
