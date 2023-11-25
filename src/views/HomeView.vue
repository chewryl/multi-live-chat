<template>
	<div class="home container">
		<h2>Chat About Any Topic</h2>
		<div v-if="showLogin">
			<h3>Login</h3>
			<LoginForm @login="enterTopic" />
			<p>No account yet? <span @click="showLogin = false">Sign up</span> instead</p>
		</div>
		<div v-else>
			<h3>Sign up</h3>
			<SignupForm @signup="enterTopic" />
			<p>Already have an account? <span @click="showLogin = true">Sign in</span> instead</p>
		</div>
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
	components: {
		SignupForm,
		LoginForm
	},
	setup () {
		const showLogin = ref(true)
		const router = useRouter()

		const enterTopic = () => {
			router.push({ name: 'topic' })
		}

		return {
			showLogin,
			enterTopic
		}
	}
}
</script>