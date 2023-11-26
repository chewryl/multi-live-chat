<template>
	<div class="theme-icon">
		<span v-if="!lightMode" @click="toggleTheme" class="material-icons">wb_sunny</span>
		<span v-if="lightMode" @click="toggleTheme" class="material-icons">dark_mode</span>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const lightMode = ref(false)

		const toggleTheme = () => {
			lightMode.value = !lightMode.value
			lightMode.value ? document.documentElement.setAttribute('data-theme', 'light') :
				document.documentElement.setAttribute('data-theme', 'dark')
		}

		return { lightMode, toggleTheme}
	}
}
</script>

<style>
.theme-icon {
	width: 95%;
	margin: 2rem auto;
	border-radius: 3px;
}
</style>