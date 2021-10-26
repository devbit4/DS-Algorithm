const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
	for (let line = 1; line <= num; line++) {
        let star="";
        for(let i =0; i<line; i++){
            star=star+"*";
        }
        console.log(star);
}
}