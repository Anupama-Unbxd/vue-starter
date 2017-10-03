import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import New from '@/components/New'
import IncrementPage from '@/pages/IncrementPage'
import ComplexObjects from '@/pages/ComplexObjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/increment',
      name: 'IncrementPage',
      component: IncrementPage
    },
    {
      path: '/complex',
      name: 'ComplexObjects',
      component: ComplexObjects
    }
  ]
})
