import Vue from 'vue'
import Router from 'vue-router'
import CanvasComponent from '@/components/CanvasComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CanvasComponent',
      component: CanvasComponent
    }
  ]
})
