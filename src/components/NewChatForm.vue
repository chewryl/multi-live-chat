<template>
	<form>
		<textarea
			placeholder="Hit enter to send message..."
			v-model="message"
			@keypress.enter.prevent="handleSubmit"
		></textarea>
	</form>
</template>

<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';

export default {
	setup () {
		const message = ref('')
		const { user } = getUser()

		const handleSubmit = async () => {
			const chat = {
				message: message.value,
				user: user.value.displayName,
				createdAt: timestamp()
			}

			console.log(chat)
			message.value = ''
		}

		return {
			message,
			handleSubmit
		}
	}
}
</script>

<style lang="scss" scoped>
form {
	margin: 10px;
}
textarea {
	width: 100%;
	max-width: 100%;
	margin-bottom: 6px;
	box-sizing: border-box;
	padding: 10px;
	border: 0;
	border-radius: 20px;
	font-family: inherit;
	outline: none;
}
</style>