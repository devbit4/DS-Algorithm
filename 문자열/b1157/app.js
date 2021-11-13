const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);
function solution(S) {
	let upper = S.toUpperCase();
	let result = Array(26).fill(0);

	for (let i = 0; i < upper.length; i++) {
		result[upper[i].charCodeAt(0) - 65] =
			result[upper[i].charCodeAt(0) - 65] + 1;
	}

	let max = Math.max(...result);
	// console.log(result.filter(item => item === max));

	if (result.filter(item => item === max).length === 1) {
		console.log(String.fromCharCode(result.indexOf(max) + 65));
	} else {
		console.log("?");
	}
}
