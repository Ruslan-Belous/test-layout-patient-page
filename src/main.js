import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import 'vue-awesome/icons'
import './assets/styles/main.css'
import './assets/styles/media.scss'
import './assets/styles/mixin.scss'
import './assets/styles/reset.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'material-design-icons-iconfont';

library.add(fas, far, fab,)
Vue.component('fa', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
