import { createRouter, createWebHistory } from 'vue-router'
import Capcha from '../components/Capcha.vue'
import ChatBot from '../components/ChatBot.vue'
import Input1 from '../components/Input1.vue'
import Input2 from '../components/Input2.vue'
import NDA from '../components/NDA.vue'
import Speech from '../components/Speech.vue'
import Grey from '../components/Grey.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cassandra/capcha',
      name: 'Capcha',
      component: Capcha
    },
    {
      path: '/cassandra/chat',
      name: 'Cassandra',
      component: ChatBot
    },
    {
      path: '/cassandra/login',
      name: 'login',
      component: Input1
    },
    {
      path: '/cassandra/dob',
      name: 'dob',
      component: Input2
    },
    {
      path: '/speech',
      component: Speech
    },
    {
      path: '/cassandra/nda',
      component: NDA
    },
    {
      path: '/grey',
      component: Grey
    }
  ]
})

export default router
