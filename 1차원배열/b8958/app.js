const fs = require("fs");
const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = +input[0];
let arr = [];

for (let i = 1; i < N + 1; i++) {
	arr.push(input[i]);
}

solution(N, arr);
function solution(N, arr) {
	for (let i = 0; i < N; i++) {
		let count = 0;
		let sum = 0;

		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === "O") {
				count++;
			} else {
				count = 0;
			}

			sum += count;
		}

		console.log(sum);
	}
}
