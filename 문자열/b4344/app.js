// const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = +input[0];

let arr = [];

for (let i = 1; i <= T; i++) {
	arr.push(input[i].split(" ").map((item) => +item));
}

solution(T, arr);

function solution(T, arr) {
	for (let i = 0; i < T; i++) {
		let sum = 0;
		let count = 0;
		let N = arr[i][0];
		let ave = 0;
		for (let j = 1; j <= N; j++) {
			sum = sum + arr[i][j];
			ave = sum / N;
		}
		// let ave = sum / N;
		for (let k = 1; k <= N; k++) {
			if (arr[i][k] > ave) {
				count++;
			}
		}
		console.log(((count / N) * 100).toFixed(3) + "%");
	}
}
