<template>
  <h1>PWA 할 일 관리 앱</h1>
</template>

<script>
export default {
	render: function(createElement){ //-> template의 tag가 실제로는 이렇게 되어 있음
		return createElement('h1', 'Todo App')
	},
	// vcrea
	created() {
		// document 생성 x
		var h1 = document.querySelector('h1');
		console.log('created', h1);
	},
	//vbm
	beforeMount() {
		// document 생성 x
		var h1 = document.querySelector('h1');
		console.log('before mount', h1);
	},
	//vm
	mounted() {
		// template가 실제 dom에 있지 않고 string 상태에서, mounted가 되어야 tag로 변환된다.
		var h1 = document.querySelector('h1');
		console.log('mounted', h1);
	},
};
</script>

<style scoped>
h1 {
	color: blue;
}
</style>