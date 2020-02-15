<template>
	<div id="app">
		<app-header></app-header>
		<app-contents></app-contents>
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppContents from '@/components/AppContents.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
		AppContents,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
