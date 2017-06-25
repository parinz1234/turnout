import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'
import store from './store'
import 'bulma/css/bulma.css'

import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    router.push('/dashboard')
    store.dispatch('signIn', user)
  } else {
    router.push('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
