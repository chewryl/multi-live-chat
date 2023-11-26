<template>
	<div class="chat-window">
		<div v-if="error">{{ error }}</div>
		<div v-if="docs" class="messages" ref="messages">
			<div v-for="doc in formattedDocsWithUserColor" :key="doc.id" class="single-message">
				<span class="created-at">{{ doc.createdAt }} ago</span>
				<span class="user" :style="{'color': doc.color}">{{ doc.user }}</span>
				<span class="message">{{ doc.message }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import getCollectionByTopic from '@/composables/getCollectionByTopic';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns'

export default {
	props: ['topic'],
	setup (props) {
		const { docs, error } = getCollectionByTopic('messages', props.topic)
		let usernameColor = []

		const formattedDocsWithUserColor = computed(() => {
			if (docs) {
				docs.value.forEach(doc => {
					if (!usernameColor.includes(doc.user)) {
						usernameColor.push({ user: doc.user, color: generateRandomColor() })
					}
				})
				return docs.value.map(doc => {
					let color = usernameColor.find(u => u.user === doc.user).color
					let time = formatDistanceToNow(doc.createdAt.toDate())
					return { ...doc, createdAt: time, color }
				}).sort((x, y) => {
					return x.createdAt - y.createdAt
				})
			}
		})

		const generateRandomColor = () => {
			return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
		}

		// auto scroll
		const messages = ref(null)

		onUpdated(() => {
			messages.value.scrollTop = messages.value.scrollHeight
		})

		return {
			docs,
			error,
			formattedDocsWithUserColor,
			messages
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
	margin-bottom: px;
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