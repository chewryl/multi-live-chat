<template>
	<div class="home container">
		<p>home</p>
		<div v-if="showLogin">
			<h2>Login</h2>
			<LoginForm @login="enterChat" />
			<p>No account yet? <span @click="showLogin = false">Sign up</span> instead</p>
		</div>
		<div v-else>
			<h2>Sign up</h2>
			<SignupForm @signup="enterChat" />
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

		const enterChat = () => {
			router.push({ name: 'chatroom' })
		}

		return {
			showLogin,
			enterChat
		}
	}
}
</script>

<style lang="scss">
@use '@/assets/main' as v;

.home {
	text-align: center;
	padding: 20px 0;
	form {
		width: 300px;
		margin: 20px auto;
	}
	label {
		display: block;
		margin: 20px 0 10px;
	}
	input {
		width: 100%;
		padding: 10px;
		border-radius: 3px;
		border: 1px solid #eee;
		outline: none;
		color: v.$slate;
		margin: 10px auto;
	}
	span {
		font-weight: bold;
		text-decoration: underline;
		cursor: pointer;
		color: v.$sea;
	}
	button {
		margin: 20px auto;
	}
}
</style>