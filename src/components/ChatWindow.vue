<template>
	<div class="chat-window">
		<div v-if="error">{{ error }}</div>
		<div v-if="docs" class="messages">
			<div v-for="doc in messagesWithUserColor" :key="doc.id" class="single-message">
				<span class="created-at">{{ doc.createdAt.toDate() }}</span>
				<span class="user" :style="{'color': doc.color}">{{ doc.user }}</span>
				<span class="message">{{ doc.message }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { computed } from 'vue';

export default {
	setup () {
		const { docs, error } = getCollection('messages')
		let usernameColor = []

		const messagesWithUserColor = computed(() => {
			docs.value.forEach(doc => {
				if (!usernameColor.includes(doc.user)) {
					usernameColor.push({ user: doc.user, color: generateRandomColor() })
				}
			})
			let messagesWithUserColor = docs.value.map(doc => {
				let color = usernameColor.find(u => u.user === doc.user).color
				return { ...doc, color }
			})
			return messagesWithUserColor.sort((x, y) => {
				return x.createdAt - y.createdAt
			})
		})

		const generateRandomColor = () => {
			return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
		}

		return {
			docs,
			error,
			messagesWithUserColor
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