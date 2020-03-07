<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{ item }}</span>
        <button v-on:click="removeItem(item, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../utils/bus';

export default {
	//props: ['list'],
	props: {
		// app에서 data를 내려받기 위함!!
		list: Array, // Array가 아닐 때는 에러가 남 (ex> String)
	},
	// data() {
	// 	//vda
	// 	return {
	// 		todoItems: [],
	// 	};
	// },
	methods: {
		// fetchItems: function() {
		// 	//일반적으로는 axios.get으로 받아옴
		// 	for (var i = 0; i < localStorage.length; i++) {
		// 		var item = localStorage.key(i);
		// 		this.todoItems.push(item);
		// 	}
		// },
		removeItem: function(item, index) {
			//this.todoItems.splice(index, 1); // index부터 1개만 삭제
			//localStorage.removeItem(item);
			this.$emit('remove-each', item, index); // payload의 순서대로 들어감
		},
		removeItems: function() {
			//모든 item 삭제
			this.todoItems = [];
		},
	},
	// created: function() {
	// 	// component가 생성되고 중간중간에 코드를 넣을 수 있음
	// 	this.fetchItems(); // life cycle : 버튼에 event 걸지 않고도 화면에 뿌려줌
	// 	//console.log('created');
	// },
	beforeMount: function() {
		bus.$on('remove-all', this.removeItems); // event를 받기 위함
		//console.log('before mount');
		//JSON.parse
		//JSON.stringify
	},
	beforeDestroy: function() {
		// event를 제거할 때
		bus.$off('remove-all', this.removeItems);
	},
};
</script>

<style></style>
