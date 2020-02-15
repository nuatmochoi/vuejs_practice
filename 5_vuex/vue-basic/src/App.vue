<template>
	<div>
		<h1>컴포넌트 코드</h1>
		<div>
			<button @click="addStr">버튼</button>
			{{ str }}
		</div>
		<hr />
		<div>
			<h1>뷰엑스 코드</h1>
			<button @click="$store.commit('addStr')">Vuex버튼</button>
			<p>{{ $store.state.str }}</p>
		</div>
		<HelloWorld></HelloWorld>
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
	components: {
		HelloWorld,
	},
	data() {
		// vda
		return {
			str: 'hello',
		};
	},
	methods: {
		addStr() {
			this.str = this.str + '!';
		},
	},
	created() {
		console.log(this);
	},
};
</script>

<style></style>
