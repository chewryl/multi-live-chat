import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import TopicView from '../views/TopicView.vue'
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
		next({ name: 'topic' })
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
    path: '/topic',
    name: 'topic',
		component: TopicView,
		beforeEnter: requireAuth
  },
  {
    path: '/chatroom/:topic',
    name: 'chatroom',
		component: ChatRoomView,
		props: true,
		beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
