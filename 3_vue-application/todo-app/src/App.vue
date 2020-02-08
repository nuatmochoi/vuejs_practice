<template>
	<!-- HTML -->
	<div>
		<todo-header></todo-header>
		<todo-input
			v-on:add-todo="addTodoItem"
			v-on:keyup.enter="addTodoItem"
		></todo-input>
		<todo-list
			v-bind:list="todoItems"
			v-on:remove-each="removeItem"
		></todo-list>
		<todo-footer v-on:clear="clearAllItems"></todo-footer>
	</div>
</template>

<script>
//JS
//import 컴포넌트 이름 from '파일 경로'
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
	components: {
		TodoHeader, //'todo-header': TodoHeader,
		TodoList, //'todo-list': TodoList,
		TodoFooter, //'todo-footer': TodoFooter,
		TodoInput, //'todo-input': TodoInput,
	},
	data() {
		//vda tap
		return {
			todoItems: [],
		};
	},
	methods: {
		fetchItems() {
			//일반적으로는 axios.get으로 받아옴
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.key(i);
				this.todoItems.push(item);
			}
		},
		addTodoItem: function(value) {
			// 뷰 데이터 목록에 값을 1개 추가
			this.todoItems.push(value);
			// DB에 추가
			localStorage.setItem(value, value); // 실제 구현시는 axios로
		},
		removeItem: function(item, index) {
			this.todoItems.splice(index, 1); // index부터 1개만 삭제
			localStorage.removeItem(item);
		},
		clearAllItems: function() {
			// 뷰 데이터 목록 초기화
			this.todoItems = [];
			// DB 초기화
			localStorage.clear();
		},
	},
	// component가 생성되고 중간중간에 코드를 넣을 수 있음
	created: function() {
		// component가 생성될 때
		this.fetchItems(); // life cycle : 버튼에 event 걸지 않고도 화면에 뿌려줌
		//console.log('created');
	},
};
</script>

<style>
/* css */
</style>
