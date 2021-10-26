const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = +input[0];
let numbers = [];

for(let i = 1; i<= num; i++){
    numbers.push(input[i].split(' ').map(item=>+item));
}

solution(num,numbers);
function solution(num,numbers){


  for(let i=0; i<num; i++){

    let a= numbers[i][0];
    let b= numbers[i][1];

    console.log(`Case #${i+1}:`, `${a} + ${b} = ${a + b}`);

  }



}