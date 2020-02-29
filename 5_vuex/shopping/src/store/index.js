import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cartItems: [],
    },
    mutations: {
		favorite(state, cartItems) {
			// 두 번째 인자는 payload로도 많이 씀
			state.cartItems = cartItems;
		},
	},
});