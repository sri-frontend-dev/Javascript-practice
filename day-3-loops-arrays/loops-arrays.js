// Loops

// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

// //Task 1 -  print 1 to 5

for( let i = 1; i <= 5; i++){
console.log(i);
}

// Task 2 – Print even numbers
// print even numbers from 1 to 10

for ( let i = 1; i <= 10; i++){
      if( i % 2 === 0){
        console.log(i);
      }
}

// Task 3 – Sum of numbers
// Find the sum of numbers from 1 to 5.

let sum1 = 0;

for( let i = 1; i <= 5; i++){
  sum1 += i;
}
console.log(`sum is ${sum1}`);

//  Task 1 – Reverse Numbers
// print numbers from 10 to 1

for ( let i = 10; i >= 1; i--){
    console.log(i);
}

//  Task 2 – Multiplication Table
// Print the table of 5 (5 × 1 to 5 × 10)

for ( let i = 1; i <= 10; i++){
        console.log(`5 x ${i} = ${5 * i}`);
    }

//  Task 3 – Count Numbers Divisible by 3
// From 1 to 15, count how many numbers are divisible by 3.

let count = 0;

for ( let i = 1; i <= 15; i++){
    if( i % 3 === 0){
        count++;
    }
}
console.log("count is", count);

// Print numbers from 20 to 5

for ( let i = 20; i >= 5; i--){
    console.log(i);
}

// Print only odd numbers between 1–50

for ( let i = 1; i <= 50; i++){
    if( i % 2 !==  0){
        console.log(i);
    }
}

for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

// //  Find factorial of 6

let fact = 1;

for ( let i = 1; i <= 6; i++){
     fact *= i;
}

// console.log("fact is",fact)

// while loop

let i = 0;
while( i < 5){
    console.log(i);
    i++;
}

// Task 1 – Print 1 to 5

let num = 1
while( i < 6){
    console.log(num);
    i++;
}

// Task 2 –
// Print even numbers from 2 to 10

let count1 = 2;

while( count1 <= 10){
     console.log(count1);
    i += 2;
    }

let counti = 1;

while (counti <= 10) {
    if (i % 2 === 0) {
        console.log(counti);
    }
    i++;
}

// Task 3 – Sum of numbers from 1 to 10

let num2 = 1;
let sum = 0;

while (num2 <= 10) {
  sum += i;
  i++;
}

console.log("sum is",sum,);
