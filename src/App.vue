<template>
	<theme-toggle />
  <router-view/>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue';

export default {
    components: { ThemeToggle }
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
