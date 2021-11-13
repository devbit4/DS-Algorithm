const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = [];

for (let i = 0; i < input.length; i++) {
	arr.push(input[i].split(" ").map((item) => +item));
}

solution(arr);
function solution(arr) {
	// for (let i = 0; i < arr.length; i++) {
	// 	let result = arr[i][0] + arr[i][1];
	// 	if (!result) {
	// 		break;
	// 	} else {
	// 		console.log(result);
	// 	}
	// }

	let i = 0;
	while (i < arr.length) {
		let result = arr[i][0] + arr[i][1];
		if (!result) {
			break;
		} else {
			console.log(result);
		}
		i++;
	}
}
