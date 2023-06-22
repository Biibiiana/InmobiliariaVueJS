import { createApp, onMounted } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import { ref } from 'vue'

import Profile from 'components/profile.vue'
import Welcome from 'components/welcome.vue'
import Offerts from 'components/offerts.vue'
import Explore from 'components/explore.vue'

const routes = [
  {
    path: '/',
    name: 'Ofertas',
    component: Offerts
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
