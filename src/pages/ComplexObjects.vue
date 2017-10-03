<template>
  <div class="complex-demo">
    <div class="complex-objects">
      <h3>Complex Object Manipulation</h3>
      <button @click.prevent="addColor">Add Color</button>
      <button @click.prevent="updateColor">Update Color</button>
      <ul>
        <li v-for="item in colors">
          <div>Color code for {{ item.color }} is {{ item.value }}, <span v-if="item.selected">and it is Selected</span></div>
        </li>
      </ul>
    </div>
    <div>
      <h3>2 way data binding</h3>
      <input type="text" v-model="name"/>
      <span>Name is {{name}}</span>
    </div>
  </div>
</template>
<script>
  import store from '../store'

  export default {
    methods: {
      updateColor () {
        store.commit('updateColor', 'green')
      },
      addColor () {
        store.commit('addColor')
      }
    },
    computed: {
      colors () {
        return store.state.colorsArray
      }
    },
    data: () => {
      return {
        name: store.state.name
      }
    }
  }
</script>
<style scoped="true">
  .selected {
    background-color: green;
    color: #fff;
  }
</style>
