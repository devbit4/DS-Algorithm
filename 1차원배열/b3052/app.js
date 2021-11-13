const fs = require("fs");
const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];

for (let i = 0; i < input.length; i++) {
	arr.push(+input[i]);
}

solution(arr);
function solution(arr) {
	const answer = Array(42).fill(0);

	for (let i = 0; i < arr.length; i++) {
		const nowChar = +(arr[i] % 42);
		answer[nowChar]++;
	}

	let count = 0;

	for (let i = 0; i < 42; i++) {
		if (answer[i] !== 0) {
			count = count + 1;
		}
	}

	console.log(count);
}
