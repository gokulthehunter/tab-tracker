import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})