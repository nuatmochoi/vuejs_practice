<template>
	<div class="w-full max-w-xs mx-auto pt-32">
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			v-on:submit.prevent="submitForm"
		>
			<div class="mb-4">
				<label
					class="block text-grey-darker text-sm font-bold mb-2"
					for="username"
				>
					Username
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Username"
					v-model="username"
				/>
			</div>
			<div class="mb-6">
				<label
					class="block text-grey-darker text-sm font-bold mb-2"
					for="password"
				>
					Password
				</label>
				<input
					class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
					v-model="password"
				/>
				<p class="text-red text-xs italic">Please choose a password.</p>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Sign In
				</button>
				<a
					class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
					href="#"
				>
					Forgot Password?
				</a>
			</div>
		</form>
		<p class="text-center text-grey text-xs">
			©2018 Captain Pangyo. All rights reserved.
		</p>
	</div>
	<!--
	<div>
		<input-id></input-id>
		<input-pw></input-pw>
		<content-footer></content-footer>
	</div>
  -->
</template>

<script>
//import InputId from './components/InputId.vue';
//import InputPassword from './components/InputPassword.vue';
//import ContentFooter from './components/ContentFooter.vue';

export default {
	data() {
		return {
			username: '', // v-model로 연결하고
			password: '',
		};
	},
	methods: {
		submitForm: function() {
			//event.preventDefault();
			var vm = this;
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users/',
				method: 'POST',
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8',
				data: JSON.stringify({
					name: this.username,
					password: this.password, // 현재 있는 data들와 연결시키고
				}),
			})
				.then(function(response) {
					// 성공시 초기화까지
					console.log(response);
					vm.initForm();
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		initForm: function() {
			this.username = '';
			this.password = '';
		},
	},
	// components: {
	// 	'input-id': InputId,
	// 	'input-pw': InputPassword,
	// 	'content-footer': ContentFooter,
	// },
	// mounted: function(){
	//   $(document).ready(function() {
	//     $('form').on('submit', function(event) { // --- v-on:submit="submitForm" 로 연결
	//       event.preventDefault();

	//       var username = $(this).find('#username');
	//       var password = $(this).find('#password'); // --- v-model로 연결

	//       $.ajax({
	//         url: 'https://jsonplaceholder.typicode.com/users/',
	//         method: 'POST',
	//         dataType: 'json',
	//         contentType: "application/json; charset=UTF-8",
	//         data: JSON.stringify({
	//           name: username.val(),
	//           password: password.val()
	//         })
	//       })
	//       .then(function(response) {
	//         console.log(response);
	//       })
	//       .catch(function(error) {
	//         console.log(error);
	//       });

	//       username.val('');
	//       password.val('');
	//     });
	//   });
	// }
};
</script>
