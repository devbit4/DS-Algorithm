const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);


function solution(num) {

//    console.log(num*(num+1)/2);
    let sum = 0;
    for(let i=1; i<=num; i++){

        sum=sum+i;
    }

    console.log(sum);
};

