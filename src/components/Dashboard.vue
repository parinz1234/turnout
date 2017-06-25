<template>
  <div class="columns is-multiline">
      <div class="column is-12 has-text-centered">
        <h1 class="title">Dashboard</h1>
      </div>
      <div class="column is-12">
        {{ userData }}
      </div>
      <div class="column is-12 has-text-centered">
        <button @click="signOut" class="button is-danger">Sign Out</button>
      </div>
  </div>
</template>
<script>
  import { firebaseApp } from '../firebaseApp'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['userData'])
    },
    methods: {
      signOut () {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    }
  }
</script>
