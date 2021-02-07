import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  dom
} from '@fortawesome/fontawesome-svg-core'

import {
  fas
} from '@fortawesome/free-solid-svg-icons'

import {
  fab
} from '@fortawesome/free-brands-svg-icons';

import {
  far
} from '@fortawesome/free-regular-svg-icons';


library.add(far);
library.add(fab);
library.add(fas)
dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#glorydev')