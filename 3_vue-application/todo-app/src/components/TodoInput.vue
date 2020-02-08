<template>
  <div>
    <input type="text" v-model="inputText" />
    <!-- <input type="text" v-on:input="changeText" v-bind:value="inputText" /> -->
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
	//data : {} 객체로 만들면 에러가 난다.
	//컴포넌트에 data를 선언할 때는 function 형태여야 한다.
	data() {
		return {
			inputText: '',
			testData: '',
		};
	},
	methods: {
		addItem: function() {
			var value = this.inputText; // trim?
			//localStorage.setItem(value, value);
			this.$emit('add-todo', value); // 동작: 대상
			this.clearInput();
		},
		clearInput: function() {
			this.inputText = ''; // 입력후 input 칸 비우기
		},
		changeText: function(event) {
			this.testData = event.target.value;
		},
	},
};
</script>

<style></style>
