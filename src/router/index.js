import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import { projectAuth } from '@/firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	console.log('current user in auth guard: ', user)
	if (!user) {
		next({ name: 'home' })
	} else {
		next()
	}
}

const requireNoAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	if (user) {
		next({ name: 'chatroom' })
	} else {
		next()
	}
}

const routes = [
  {
    path: '/',
    name: 'home',
		component: HomeView,
		beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'chatroom',
		component: ChatRoomView,
		beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
