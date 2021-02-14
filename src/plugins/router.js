import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '@/components/Home'
import Task1 from '@/components/Task1'
import Task2 from '@/components/Task2'
import Task3 from '@/components/Task3'
import Task4 from '@/components/Task4'
import Task5 from '@/components/Task5'

// routing
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'task-1', path: '/task/1', component: Task1 },
    { name: 'task-2', path: '/task/2', component: Task2 },
    { name: 'task-3', path: '/task/3', component: Task3 },
    { name: 'task-4', path: '/task/4', component: Task4 },
    { name: 'task-5', path: '/task/5', component: Task5 },

    // redirect to by default
    { name: 'default', path: '*', redirect: { name: 'home' } },
  ]
})
