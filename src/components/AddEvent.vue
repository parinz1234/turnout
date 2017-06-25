<template>
  <div class="columns is-multiline">
      <div class="column is-12">
          <strong>Add an Event <input type="checkbox" v-model="showForm"></strong>
      </div>
      <div v-show="showForm" class="column is-12">
          <div class="columns is-multiline">
              <!-- title -->
              <div class="column is-12">
                <div class="field">
                  <label class="label">Title</label>
                  <p class="control is-expanded">
                    <input v-model="event.title" class="input" type="text" placeholder="title">
                  </p>
                </div>
              </div>
              <!-- description -->
              <div class="column is-12">
                <div class="field">
                  <label class="label">Description</label>
                  <p class="control is-expanded">
                    <input v-model="event.description" class="input" type="text" placeholder="description">
                  </p>
                </div>
              </div>
              <!-- date -->
              <div class="column is-12">
                <div class="field">
                  <label class="label">Date</label>
                  <p class="control is-expanded">
                    <input v-model="event.date" class="input" type="date" placeholder="date">
                  </p>
                </div>
              </div>
              <!-- location -->
              <div class="column is-12">
                <div class="field">
                  <label class="label">Location</label>
                  <p class="control is-expanded">
                    <input v-model="event.location" class="input" type="text" placeholder="location">
                  </p>
                </div>
              </div>
              <!-- button -->
              <div class="column is-12">
                  <button @click="addEvent" class="button is-success ">Add Event</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import { eventsRef } from '../firebaseApp'
  export default {
    data: () => ({
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email:''
      },
      showForm: false
    }),
    methods: {
      addEvent () {
        // console.log(this.$store)
        this.event.email = this.$store.state.user.email
        eventsRef.push(this.event)
      }
    }
  }
</script>
