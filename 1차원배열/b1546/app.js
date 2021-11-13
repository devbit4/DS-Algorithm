const fs = require("fs");
const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = +input[0];
let sub = input[1].split(" ").map((item) => +item);

solution(N, sub);
function solution(N, sub) {
	let max = 0;

	for (let i = 0; i < N; i++) {
		if (sub[i] > max) {
			max = sub[i];
		}
	}

	let all = 0;

	for (let i = 0; i < N; i++) {
		all = all + (sub[i] / max) * 100;
	}

	console.log(all / N);
}
