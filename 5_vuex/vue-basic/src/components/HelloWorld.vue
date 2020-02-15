<template>
	<div>
		<h1>HelloWorld의 뷰엑스 코드</h1>
		<button @click="$store.commit('addStr')">Vuex버튼</button>
		<p>{{ $store.state.str }}</p>
	</div>
</template>
