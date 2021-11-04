import 'es6-promise/auto'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatDate } from './mixins'

import './assets/styles/main.sass'

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mixin({
    methods: {
      formatDate
    }
  })
  .use(store)
  .use(router)
  .mount('#app')
