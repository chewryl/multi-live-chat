<template>
	<form @submit.prevent="handleSubmit">
	<input type="text" required placeholder="enter topic to chat about" v-model="topic">
	<button :disabled="canSubmit">Enter {{ formattedTopic }} chat room</button>
 </form>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup (props, context) {

		const topic = ref('')
		const formattedTopic = computed(() => topic.value.replace(/ /g, '-').toLowerCase())

		const canSubmit = computed(() => !Boolean(topic.value))

		const handleSubmit = () => {
			context.emit('submitTopic', formattedTopic.value)
		}

		return {
			topic,
			formattedTopic,
			canSubmit,
			handleSubmit
		}
	}
}
</script>