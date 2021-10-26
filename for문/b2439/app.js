const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
	for (let line = 1; line <= num; line++) {

		// let space = "";
        // let star = "";
		let print="";

		for (let i = 0; i < num - line; i++) {
			print = print + " ";
		}
		for (let i = 0; i < line; i++) {
			print = print + "*";
		}
		console.log(print);
	}
}

