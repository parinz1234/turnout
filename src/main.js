import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

import 'bulma/css/bulma.css'

import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: SignIn }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    router.push('/dashboard')
  } else {
    router.push('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
