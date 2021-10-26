const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(item=>+item)

solution(input[0]);
function solution(Year) {

    if((Year%4) === 0 && (Year%100) !==0 ){
        console.log(1);
    }else if((Year%400) ===0){
        console.log(1);
    }else{
        console.log(0);
    }
}

