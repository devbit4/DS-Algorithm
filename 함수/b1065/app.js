const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
	let 한수=0;
	for (let i = 1; i <= N; i++) {
		if (i < 100) {
			한수++;
		}
		let A = Number(String(i)[1]) - Number(String(i)[0]);
		let B = Number(String(i)[2]) - Number(String(i)[1]);
		if (A === B) {
			한수++;
		}
	}

	console.log(한수);
}
