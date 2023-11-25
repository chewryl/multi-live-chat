<template>
	<div class="home container">
		<TopicForm @submitTopic="enterChat"/>
	</div>
</template>

<script>
import TopicForm from '@/components/TopicForm.vue';
import { useRouter } from 'vue-router';

export default {
	components: {
		TopicForm
	},
	setup () {
		const router = useRouter()

		const enterChat = (topic) => {
			router.push({ name: 'chatroom', params: { topic: topic } })
		}

		return {
			enterChat
		}
	}
}
</script>

<style>
</style>