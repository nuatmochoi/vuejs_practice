<template>
	<div>
		<label class="block text-grey-darker text-sm font-bold mb-2" for="username">
			Username
		</label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
			id="username"
			type="text"
			placeholder="Username"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputId: '',
		};
	},
};
</script>
