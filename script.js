// Q1. Add two Numbers 
// let x=5;
// let y=2;
// let z=x+y;
// console.log(z);

// second Method 

// function addTwoNumbers(){
//      let x=5;
//      let y=2;
//      return x+y;
// }
// console.log(addTwoNumbers());


// Q2. Find if the conditions are obeyed or not?
// function Is_Valid(){
//     let A=5;
//     let B=3;
//     if (A<10 && B<10){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(Is_Valid());

// Q3.Check the conditions 

// You are given two numbers A�and B�. You need to do the following checks:
// I. if both are divisible by 10 console true.
// II. if both are not divisible by 10 console false.
// III. if one of them only is divisible by 10 console true

// // function check(){
//     let A=12;
//     let B=20;

//     if (A%10==0 && B%10==0){
//         console.log(true);
//     }else if (A % 10 !==0 && B % 10 !==0){
//         console.log(false)
//     } else {
//         console.log(true);
//     }
// // }
// // check();

// Q5.Find the last digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number.

// let N=4567;
// let FirstDigit=Math.floor(N/1000);
// console.log(FirstDigit);

// Q6.Find the remainder 
// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your 
// task is find the remainder.

// let A=2;
// let B=9;
// let Remainder= B % A;
// console.log(Remainder);

// Q7.Multiply two Numbers 
// You are provided with two numbers A�and B�. Your task is to multiply these two numbers.

// let A=2;
// let B=5;

// let Result=A * B;
// console.log(Result);

// Q8. Marks Calculator 
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.

// let A=50;
// let B=20;
// let C=100;

// let TotalMarks= A + B + C;
 
// console.log(TotalMarks);

// let Average= TotalMarks/3;

// console.log(Average);

// 2nd Method

function sum(){
    let A=50;
    let B=20;
    let C=100;

    let TotalMarks= A + B + C;

    return TotalMarks;
}

function Average(){
    let TotalMarks = sum();

     let Average = TotalMarks/3;
     return Average;
}

let TotalMarks= sum();
let AverageMarks = Average();

console.log(TotalMarks + " " +AverageMarks);

