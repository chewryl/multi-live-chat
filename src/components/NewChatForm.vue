<template>
	<form>
		<textarea
			placeholder="Hit enter to send message..."
			v-model="message"
			@keypress.enter.prevent="handleSubmit"
		></textarea>
		<div v-if="error" class="error">{{ error }}</div>
	</form>
</template>

<script>
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection'

export default {
	setup () {
		const { user } = getUser()
		const { addDoc, error } = useCollection('messages')

		const message = ref('')

		const handleSubmit = async () => {
			const chat = {
				message: message.value,
				user: user.value.displayName,
				createdAt: timestamp()
			}

			await addDoc(chat)
			if (!error.value) {
				message.value = ''
			}
		}

		return {
			message,
			handleSubmit,
			error
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