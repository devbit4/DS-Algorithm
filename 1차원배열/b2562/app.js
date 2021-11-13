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
	let max = arr[0];
	let k = 1;

	for (let i = 1; i < input.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
			k = i+1;
		}
	}
	console.log(max);
	console.log(k);
}
