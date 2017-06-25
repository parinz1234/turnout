<template>
  <div class="columns is-multiline">
      <div class="column is-12 has-text-centered">
        <h1 class="title">Dashboard</h1>
      </div>
      <div class="column is-12">
        <AddEvent />
      </div>
      <div class="column is-12 ">
        <div class="columns is-multiline">
          <EventItem :event="e" :key="index"  v-for="(e, index) in eventItems"/>
        </div>
      </div>
      <div class="column is-12 has-text-centered">
        <button @click="signOut" class="button is-danger">Sign Out</button>
      </div>
  </div>
</template>
<script>
  import { firebaseApp, eventsRef } from '../firebaseApp'
  import { mapGetters } from 'vuex'
  import AddEvent from './AddEvent.vue'
  import EventItem from './EventItem.vue'
  export default {
    created () {
      console.log(this.$store.state)
    },
    mounted () {
      eventsRef.on('value', snap => {
        let events = []
        snap.forEach((event) => {
          // console.log(event)
          events.push(event.val())
        })
        // console.log(events)
        this.$store.dispatch('setEvents', events)
      })
    },
    computed: {
      ...mapGetters(['userData', 'eventItems'])
    },
    methods: {
      signOut () {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      AddEvent,
      EventItem
    }
  }
</script>
