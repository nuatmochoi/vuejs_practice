<template>
	<div>
		<!-- 버튼 클릭시 브라우저 저장소의 데이터 모두 삭제 -->
		<button v-on:click="removeAll">clear all</button>
	</div>
</template>

<script>
export default {
	methods: {
		removeAll: function() {
			localStorage.clear();
		},
	},
};
</script>

<style></style>
