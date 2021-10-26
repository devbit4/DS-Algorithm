const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(item=>Number(item))

solution(input[0]);
function solution(A) {

    // if(A>=90){
    //     console.log("A");
    // }else if(A>=80){
    //     console.log("B");
    // }else if(A>=70){
    //     console.log("C");
    // }else if(A>=60){
    //     console.log("D");
    // }else{
    //     console.log("F");
    // }

    if(A>=90 && A<=100){
        console.log("A");
    }
    if(A>=80 && A<90){
        console.log("B");
    }
    if(A>=70 && A<80){
        console.log("C");
    }
    if(A>=60 && A<70){
        console.log("D");
    }
    if(A<60){
        console.log("F");
    }

}

