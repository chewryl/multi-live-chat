<template>
	<nav>
		<div>
			<p>Hi displayname...</p>
			<p class="email">Currently logged in as...email</p>
		</div>
		<button @click="handleClick">Logout</button>
	</nav>
</template>
<script>
import useLogout from '@/composables/useLogout'
export default {
	setup () {
		const { logout, error } = useLogout()

		const handleClick = async () => {
			await logout()
			if (!error.value) {
				console.log('user logged out')
			}
		}

		return {
			handleClick,
			error
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
}
</style>