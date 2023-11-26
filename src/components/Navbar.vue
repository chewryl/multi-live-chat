<template>
	<nav v-if="user">
		<div>
			<router-link :to="{ name: 'topic' }">
				<div class="back-section">
					<span class="material-icons">keyboard_backspace</span>
					<p>Change topic</p>
				</div>
			</router-link>
			<p>Welcome {{ user.displayName }}</p>
			<p class="email">logged in as {{ user.email }}</p>
		</div>
		<button @click="handleClick">Logout</button>
	</nav>
</template>
<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
	setup () {
		const { logout, error } = useLogout()
		const { user } = getUser()

		const handleClick = async () => {
			await logout()
			if (!error.value) {
				console.log('user logged out')
			}
		}

		return {
			handleClick,
			error,
			user
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
	p {
		margin: 2px auto;
		font-size: 16px;
		color: #444;
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
}
</style>