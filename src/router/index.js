import Vue from 'vue'
import Router from 'vue-router'
import GridPaintComponent from '@/components/GridPaintComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GridPaintComponent',
      component: GridPaintComponent
    }
  ]
})
