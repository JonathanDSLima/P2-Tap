import { createApp } from 'vue'
import App from './App.vue'

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './routes'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')
