import axios from 'axios';

// TODO: 아래의 forEach() API에 화살표 함수를 적용해보세요.
function example1() {
	var arr = [1, 2, 3, 4];
	var sum = 0;

	arr.forEach(value => {
		// 인자가 1개면 괄호를 해도되고 안해도 된다.
		sum = sum + value;
	});

	return sum === 10;
}

// TODO: 아래의 fetch() API에 화살표 함수를 적용해보세요.
function example2() {
	this.post = {};
	this.validation = 1;
	this.fetchData = () => {
		var vm = this;
		return axios
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.then(data => {
				this.post = data.post; // 화살표 함수를 쓰면 vm이 아닌 this를 사용해도 된다.
			})
			.catch(error => {
				console.error(error);
			});
	};
}

export { example1, example2 };
