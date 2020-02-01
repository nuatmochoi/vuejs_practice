<template>
	<div>
		<ul>
			<li v-for="(item, index) in todoItems" :key="index">
				<span>{{ item }}</span>
				<button v-on:click="removeItem(item, index)">remove</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		//vda
		return {
			todoItems: [1, 2, 3],
		};
	},
	methods: {
		fetchItems: function() {
			//일반적으로는 axios.get으로 받아옴
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.key(i);
				this.todoItems.push(item);
			}
		},
		removeItem: function(item, index) {
			this.todoItems.splice(index, 1); // index부터 1개만 삭제
			localStorage.removeItem(item);
		},
	},
	created: function() {
		this.fetchItems(); // life cycle : 버튼에 event 걸지 않고도 화면에 뿌려줌
		//console.log('created');
	},
	beforeMount: function() {
		//console.log('before mount');
		//JSON.parse
		//JSON.stringify
	},
};
</script>

<style></style>
