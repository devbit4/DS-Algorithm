const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let number = input[0].split(' ').map((item) => +item);

let numbers = input[1].split(" ").map((item) => +item);

solution(number, numbers);
function solution(number, numbers) {
	let N = number[0];
	let X = number[1];
    let result = '';
	for (let i = 0; i < N; i++) {
		if (numbers[i] < X) {
            result= result + numbers[i]+ ' ';
		}
	}
    console.log(result);
}
