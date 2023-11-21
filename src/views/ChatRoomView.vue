<template>
	<div class="container">
		<Navbar />

	</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
	components: {
		Navbar
	},
	setup () {
		const { user } = getUser()
		const router = useRouter()

		watch(user, newState => {
			// user has logged out
			if (!newState) {
				router.push({ name: 'home' })
			}
		})
	}
}
</script>