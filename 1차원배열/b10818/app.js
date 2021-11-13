const fs = require("fs");
const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = +input[0];
let numbers = input[1].split(" ").map((item) => +item);

solution(num, numbers);
function solution(num, numbers) {
	let max = numbers[0];
	let min = numbers[0];
	for (let i = 0; i < num - 1; i++) {
		if (numbers[i + 1] > max) {
			max = numbers[i + 1];
		}
		if (numbers[i + 1] < min) {
			min = numbers[i + 1];
		}
	}
	console.log(min, max);
}
