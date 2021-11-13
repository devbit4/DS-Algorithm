const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = +input[0];
let array = input[1].split("").map((number) => +number);

solution(N, array);

function solution(N, array) {
	// let sum = 0;
	// for (let i = 0; i < N; i++) {
	// 	sum = sum + Number(array[i]);
	// }
	// console.log(sum);

	let sum = array.reduce((acc, val) => acc + val, 0);
	console.log(sum);
}

