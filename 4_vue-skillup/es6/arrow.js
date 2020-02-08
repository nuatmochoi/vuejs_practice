var arr = ['a', 'b', 'c'];
arr.forEach(function(value, index) {
	console.log(value, index);
});

arr.forEach((value, index) => {
	console.log(value, index);
});

var sum = (a, b) => {
	return a + b;
};

console.log(sum(1, 2));

var getTen = () => 10; // 하나의 값만 반환하면 block 쓰지 않아도 된다.

console.log(getten());
