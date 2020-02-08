<template>
	<div class="flex items-center justify-between">
		<button
			class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="submit"
			v-on:click="clearData"
		>
			Sign In
		</button>
		<a
			class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
			href="#"
		>
			Forgot Password?
		</a>

		<p class="text-center text-grey text-xs">
			©2018 Captain Pangyo. All rights reserved.
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		clearData: function() {},
	},
};
</script>
