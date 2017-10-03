<template>
  <button @click.prevent="activate">+1</button>
</template>

<script>
  import store from '../store'
  export default {
    props: ['incrementBy'],
    methods: {
      activate () {
        store.commit('increment', this.incrementBy)
      }
    }
  }
</script>

<style>
</style>
