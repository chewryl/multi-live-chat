<template>
	<div class="home container">
		<p>home</p>
		<SignupForm />
		<!-- <LoginForm /> -->
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
	components: {
		SignupForm,
		LoginForm
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
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
		color: #999;
		margin: 10px auto;
	}
}
</style>