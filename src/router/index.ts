import { createRouter, createWebHistory } from 'vue-router'
import NoteList from "@/views/NoteList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NoteList
    },
  ]
})

export default router
