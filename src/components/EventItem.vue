<template>
  <div class="column is-4">
    <div class="box has-text-centered">
      <p>{{event.title}}</p>
      <p>{{event.description}}</p>
      <p>{{event.date}}</p>
      <p>{{event.location}}</p>
      <p>{{event.email}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['event']
  }
</script>
<style scoped lang="scss">
.box:not(:last-child) {
  margin-bottom: 0;
}
</style>

