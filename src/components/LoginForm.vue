<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" required placeholder="email address" v-model="email">
		<input type="password" required placeholder="password" v-model="password">
		<div v-if="error" class="error">
			{{ error }}
		</div>
		<button>Log in</button>
	</form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {
	setup (props, context) {
		const { login, error } = useLogin()
		const email = ref('')
		const password = ref('')

		const handleSubmit = async () => {
			await login(email.value, password.value)
			if (!error.value) {
				context.emit('login')
			}
		}

		return {
			email,
			password,
			handleSubmit,
			error
		}
	}
}
 </script>