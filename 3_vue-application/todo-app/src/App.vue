<template>
	<!-- HTML -->
	<div>
		<todo-header></todo-header>
		<todo-input></todo-input>
		<todo-footer></todo-footer>
		<todo-list></todo-list>
		<!-- 컴포넌트 3개 등록 실습 -->
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
		'todo-header': TodoHeader,
		'todo-list': TodoList,
		'todo-footer': TodoFooter,
		'todo-input': TodoInput,
	},
};
</script>

<style>
/* css */
</style>
