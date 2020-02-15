<template>
	<div>
		<h1>액션 알아보기</h1>
		<button @click="fetchUser">get user</button>
		<p>{{ user }}</p>
		<hr />
		<button @click="$store.dispatch('FETCH_USER')">get user</button>
		<p>{{ $store.state.user }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {},
		};
	},
	methods: {
		fetchUser() {
			fetch('https://jsonplaceholder.typicode.com/users/1')
				.then(response => response.json())
				.then(json => (this.user = json));
		},
	},
};
</script>

<style></style>
