<template>
	<nav v-if="user">
		<div>
			<h5 class="topic">#{{ topic }}</h5>
			<router-link :to="{ name: 'topic' }">
				<div class="back-section">
					<span class="material-icons">keyboard_backspace</span>
					<p>Change topic</p>
				</div>
			</router-link>
			<h5>Welcome {{ user.displayName }}</h5>
			<p class="email">logged in as {{ user.email }}</p>
		</div>
		<button @click="handleClick">Logout</button>
	</nav>
</template>
<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
	props: ['topic'],
	setup (props) {
		const { logout, error } = useLogout()
		const { user } = getUser()
		let topic = props.topic

		const handleClick = async () => {
			await logout()
			if (!error.value) {
				console.log('user logged out')
			}
		}

		return {
			handleClick,
			error,
			user,
			topic
		}
	}
}
</script>
<style lang="scss">
nav {
	padding: 20px;
	border-bottom: 1px solid #444;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.topic {
		margin: 0 auto 2px auto;
		font-size: 20px;
		color: #777777;
	}
	h5, p {
		margin: 2px auto;
		font-size: 14px;
		color: #777777;
	}
	p.email {
		font-size: 14px;
		color: #999;
	}
	a {
		text-decoration: none;
	}
}
.back-section {
	display: flex;
	align-items: center;
	margin: 0 auto 15px auto;

	p {
		font-size: 14px;
		color: #999;
		margin: 0 4px 0;
	}
	&:hover * {
		color: #777
	}
}
</style>