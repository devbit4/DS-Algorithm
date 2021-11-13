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
	const num = arr[0] * arr[1] * arr[2];
	const strNum = String(num);
	const answer = Array(10).fill(0);

	for (let i = 0; i < strNum.length; i++) {
		const  nowChar = +strNum[i];
		answer[nowChar]++;
	}

	console.log(answer);
	for (let i = 0; i < answer.length; i++) {
		console.log(answer[i]);
	}
}
