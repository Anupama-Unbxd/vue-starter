import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 0,
    colorsArray: [
      {
        color: 'red',
        value: '#f00'
      },
      {
        color: 'green',
        value: '#0f0'
      },
      {
        color: 'blue',
        value: '#00f'
      },
      {
        color: 'cyan',
        value: '#0ff'
      },
      {
        color: 'magenta',
        value: '#f0f'
      },
      {
        color: 'yellow',
        value: '#ff0'
      },
      {
        color: 'black',
        value: '#000'
      }
    ],
    name: 'Anupama'
  },
  mutations: {
    increment (state, incrementBy) {
      incrementBy = +incrementBy || 1
      state.counter += incrementBy
    },
    addColor (state, color) {
      /* add new value */
      state.colorsArray.unshift({
        color: 'random',
        value: '#8632'
      })
    },
    updateColor (state, color) {
      /* change attribute of existing value */
      let selectedColor = state.colorsArray.find((obj) => {
        return obj.color === color
      })
      Vue.set(selectedColor, 'selected', true) // use this to set complex objects
    }
  }
})

export default store
