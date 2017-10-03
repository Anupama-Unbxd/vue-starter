<template>
  <div>
    <h3>Increment:</h3>
    <increment incrementBy="5"></increment>
    <h3>Counter:</h3>
    <counter></counter>
  </div>
</template>

<script>
  import Counter from '../components/CounterDisplay.vue'
  import Increment from '../components/IncrementButton.vue'

  export default {
    components: {
      Counter,
      Increment
    }
  }
</script>
