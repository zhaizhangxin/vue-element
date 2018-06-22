import Vue from 'vue'
import Router from 'vue-router'
import certifiedStudents from '@/components/certifiedStudents'
import first from '@/components/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/certifiedStudents',
      name: 'certifiedStudents',
      component: certifiedStudents
    },{
    	path:'/first',
    	name:'first',
    	compoment:first
    },
    //重定向
    {
    	path:'/',
    	redirect:'/certifiedStudents',
    }
  ]
})
