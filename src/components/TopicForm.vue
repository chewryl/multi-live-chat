<template>
	<form @submit.prevent="handleSubmit">
	<input type="text" required placeholder="enter topic to chat about" v-model="topic">
	<button :disabled="canSubmit">Enter {{ topicHyphenated }} chat room</button>
 </form>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup (props, context) {

		const topic = ref('')
		const topicHyphenated = computed(() => topic.value.replace(' ', '-'))

		const canSubmit = computed(() => !Boolean(topic.value))

		const handleSubmit = () => {
			context.emit('submitTopic', topicHyphenated.value)
		}

		return {
			topic,
			topicHyphenated,
			canSubmit,
			handleSubmit
		}
	}
}
</script>