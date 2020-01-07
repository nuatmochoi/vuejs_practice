<template>
  <div id="app">
    <div class ="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">Todo 어플리케이션 </h1>
        <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo"/>
        <div class="list-group mb-4">
          <template v-for="Todo in activeTodoList" >
            <Todo :key="Todo.label"
              :label="Todo.label"
              @componentClick="toggleTodoState(Todo)"
            />
          </template>
        </div>

        <div class = "text-right">
          <button type="button" class ="btn btn-sm" @click="changeCurrentState('active')">할 일 </button>
          <button type="button" class ="btn btn-sm" @click="changeCurrentState('done')">완료 </button>
          <button type="button" class ="btn btn-sm" @click="changeCurrentState('done')">전체 </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo';
export default {
  name: 'app',
  data(){
    return {
      userInput: '',
      todoList: [],
      currentState: 'active'
    };
  },
  computed:{ // class의 getter 함수처럼 동작
    activeTodoList(){
      return this.todoList.filter(todo => this.currentState==='all' || todo.state===this.currentState )
    } //현재 state가 all 이면 모든 항목 || 아닌 경우는 동일한 항목만
  },
  methods:{
    changeCurrentState(state){
      this.currentState = state;
    },
    addNewTodo(){
      this.todoList.push({
        label: this.userInput,
        state: 'active'
      });
      this.userInput='';
    },
    toggleTodoState(todo){
      todo.state= todo.state ==='active' ? 'done' : 'active';
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
