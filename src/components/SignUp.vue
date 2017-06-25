<template>
  <div class="columns is-multiline ">
      <div class="column is-12 has-text-centered">
        <h1 class="title">Sign Up</h1>
      </div>
      <div v-show="error.message" class="column is-12">
        <div class="notification is-danger">
          <button class="delete"></button>
          {{ error.message }}
        </div>
      </div>          
      <div class="column is-12">
          <form @submit.prevent="signUp">
            
            <div class="column is-12">
              <div class="field">
                <label class="label">email</label>
                <p class="control is-expanded">
                  <input v-model="email" class="input" type="text" placeholder="email">
                </p>
              </div>
            </div>

            <div class="column is-12">
              <div class="field">
                <label class="label">Password</label>
                <p class="control is-expanded">
                  <input v-model="password" class="input" type="password" placeholder="password">
                </p>
              </div>
            </div>

            <div class="column is-12">
                <button class="button is-success ">Sign Up</button>
            </div>

          </form>
      
      </div>

      <div class="column is-12">
          <router-link to="/signin">Alread have a user ? Sign Ip</router-link>
      </div>
  </div>
</template>
<script>
  import { firebaseApp } from '../firebaseApp'
  export default {
    data: () => ({
      email: '',
      password: '',
      error: {
        message: ''
      }
    }),
    methods: {
      signUp () {
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.error = err
          })
      }
    }
  }
</script>

