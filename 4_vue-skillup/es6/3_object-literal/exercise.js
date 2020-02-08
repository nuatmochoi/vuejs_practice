var name = 'App';
var router = {
	routes: [
		{
			path: 'sth',
			component: 'sthComponent',
		},
	],
};

function example() {
	return {
		// TODO: 아래의 속성을 축약해보세요.
		name,
		// TODO: 아래의 속성을 축약해보세요.
		router, // 위에 정의해놓은 변수와 키와 값이 동일하기 때문에
		data: {
			id: 1,
		},
	};
}

export { example };
