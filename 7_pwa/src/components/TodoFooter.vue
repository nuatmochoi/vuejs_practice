<template>
  <div>
    <!-- 버튼 클릭시 브라우저 저장소의 데이터 모두 삭제 -->
    <h1>Footer</h1>
    <button v-on:click="removeAll">clear all</button>
  </div>
</template>

<script>
// import { bus } from '../utils/bus'; // ctrl 클릭하면 그 파일로 갈 수 있다

export default {
	methods: {
		removeAll: function() {
			localStorage.clear();
			this.$emit('clear'); //event bus -> 컴포넌트간 data 전달 가능
			//bus.$emit('remove-all'); //bus와 this 차이
		},
	},
};
</script>

<style></style>
