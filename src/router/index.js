import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: 'home' });
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
