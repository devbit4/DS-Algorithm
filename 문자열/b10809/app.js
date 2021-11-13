const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let S = input[0];

solution(S);

function solution(S) {
	let answers = Array(26).fill(0);

	for (let i = 97; i <= 122; i++) {
		let 알파벳 = String.fromCharCode(i);
		let answer = S.indexOf(알파벳);
		answers[i - 97] = answer;
	}
	console.log(answers.join(" "));
}
