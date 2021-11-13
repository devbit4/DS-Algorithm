const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

solution(input);
function solution(input) {
	let num = input;
	let ans = 0;
	let sum;

	while (true) {
		ans++;

		sum = Math.floor(num / 10) + (num % 10);
		num = (num % 10) * 10 + (sum % 10);

		if (input === num) {
			break;
		}
	}

	console.log(ans);
}
