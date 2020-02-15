import _ from 'lodash'; // 상대경로 없이 이름만 -> 대부분 library
// import $ from jquery;

function component() {
	var element = document.createElement('div');

	/* lodash is required for the next line to work */
	element.innerHTML = _.join(['Hello', 'webpack'], ' '); // _ === lodash
	//element.innerHTML = 'Hello webpack' //와 동일하다
	return element;
}

document.body.appendChild(component());
