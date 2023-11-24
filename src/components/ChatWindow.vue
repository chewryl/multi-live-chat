<template>
	<div class="chat-window">
		<div v-if="error">{{ error }}</div>
		<div v-if="docs" class="messages">
			<div v-for="doc in docs" :key="doc.id" class="single-message">
				<span class="created-at">{{ doc.createdAt.toDate() }}</span>
				<span class="user">{{ doc.user }}</span>
				<span class="message">{{ doc.message }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import getCollection from '@/composables/getCollection';

export default {
	setup () {
		const { docs, error } = getCollection('messages')

		return {
			docs,
			error
		}
	}
}
</script>

<style lang="scss">
.chat-window {
	background: #fafafa;
	padding: 30px 20px;
}
.single-message {
	margin: 15px 0;
}
.created-at {
	display: block;
	color: #999;
	font-size: 12px;
	margin-bottom: 4px;
}
.user {
	font-weight: bold;
	margin-right: 6px;
}
.messages {
	max-height: 400px;
	overflow: auto;
}
</style>