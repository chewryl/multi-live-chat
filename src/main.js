import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
	if (!app) {
		// wait for initial user value from firebase before rendering the app
		// firebase connection is now established
		app = createApp(App)
			.use(router)
			.mount('#app')
	}
})

