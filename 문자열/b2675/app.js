const fs = require("fs");
// const { mainModule } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = +input[0];

let arr = [];

for (let i = 1; i <= N; i++) {
	arr.push(input[i]);
}

solution(N, arr);

function solution(N, arr) {
	for (let i = 0; i < N; i++) {
		let test = arr[i].split(" ");
		let number = +test[0];
		let stringarr = test[1].trim().split("");

		let result = stringarr.map((item) => item.repeat(number));

		console.log(result.join(""));
	}
}
