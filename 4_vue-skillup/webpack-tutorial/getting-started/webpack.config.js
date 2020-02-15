// ES5
var path = require('path');
// ES6
// import path from 'path';

module.exports = {
	// 실행모드
	mode: 'none', // === webpack --mode=none
	// 변환할 파일의 경로
	entry: './src/index.js',
	// 결과 파일의 경로
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
