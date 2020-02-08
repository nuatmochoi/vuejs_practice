<template>
	<div>
		<label class="block text-grey-darker text-sm font-bold mb-2" for="password">
			Password
		</label>
		<input
			class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
			id="password"
			type="password"
			placeholder="******************"
		/>
		<p class="text-red text-xs italic">Please choose a password.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputPw: '',
		};
	},
};
</script>
