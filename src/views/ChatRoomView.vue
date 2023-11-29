<template>
	<div class="container">
		<Navbar :topic="topic" />
		<ChatWindow :topic="topic" />
		<NewChatForm :topic="topic"/>
	</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
	components: {
		Navbar,
		NewChatForm,
		ChatWindow
	},
	setup () {
		const { user } = getUser()
		const router = useRouter()
		const route = useRoute()

		watch(user, newState => {
			// user has logged out
			if (!newState) {
				router.push({ name: 'home' })
			}
		})

		const topic = route.params.topic

		return { topic }
	}
}
</script>