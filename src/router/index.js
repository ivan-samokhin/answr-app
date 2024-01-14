import { createRouter, createWebHistory } from 'vue-router'
import Capcha from '../components/Capcha.vue'
import ChatBot from '../components/ChatBot.vue'
import Input1 from '../components/Input1.vue'
import Input2 from '../components/Input2.vue'
import NDA from '../components/NDA.vue'
import Speech from '../components/Speech.vue'
import Video from '../components/Video.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/capcha',
      name: 'Capcha',
      component: Capcha
    },
    {
      path: '/cassandra',
      name: 'Cassandra',
      component: ChatBot
    },
    {
      path: '/',
      name: 'login',
      component: Input1
    },
    {
      path: '/dob',
      name: 'dob',
      component: Input2
    },
    {
      path: '/speech',
      component: Speech
    },
    {
      path: '/nda',
      component: NDA
    },
    {
      path: '/video',
      component: Video
    }
  ]
})

export default router
