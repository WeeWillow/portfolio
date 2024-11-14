import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// material icons import
import 'material-icons/iconfont/material-icons.css';
// font awesome library import - mainly for social icons
import { library } from '@fortawesome/fontawesome-svg-core'
// font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import specific icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

// add icons to library
library.add(faGithub, faExternalLinkAlt)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
