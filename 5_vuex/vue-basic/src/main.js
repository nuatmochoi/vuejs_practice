import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';
import { store } from './store/index.js';
// import {store} from './store';

Vue.config.productionTip = false;

new Vue({
	store,
	render: function(h) {
		return h(App2);
	},
}).$mount('#app');
