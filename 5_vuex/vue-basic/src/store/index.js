// #1
import Vue from 'vue';
import Vuex from 'vuex';

// #2
Vue.use(Vuex);

// #3
export const store = new Vuex.Store({
	state: {
		user: {},
	},
	mutations: {
		setUser(state, user) {
			// 두 번째 인자는 payload로도 많이 씀
			state.user = user;
		},
	},
	actions: {
		FETCH_USER(context) {
			fetch('https://jsonplaceholder.typicode.com/users/1')
				.then(response => response.json())
				.then(json => {
					console.log(json);
					context.commit('setUser', json);
				});
		},
	},

	// state: {
	// 	str: 'hi',
	// },
	// mutations: {
	// 	addStr(state) {
	// 		state.str += '!';
	// 	},
	// 	//change1() {}
	// },
});
