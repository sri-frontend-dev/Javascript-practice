// // // Loops

// // // for loop

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// // // //Task 1 -  print 1 to 5

// for( let i = 1; i <= 5; i++){
// console.log(i);
// }

// // // Task 2 – Print even numbers
// // // print even numbers from 1 to 10

// for ( let i = 1; i <= 10; i++){
//       if( i % 2 === 0){
//         console.log(i);
//       }
// }

// // // Task 3 – Sum of numbers
// // // Find the sum of numbers from 1 to 5.

// let sum1 = 0;

// for( let i = 1; i <= 5; i++){
//   sum1 += i;
// }
// console.log(`sum is ${sum1}`);

// // //  Task 1 – Reverse Numbers
// // // print numbers from 10 to 1

// for ( let i = 10; i >= 1; i--){
//     console.log(i);
// }

// // //  Task 2 – Multiplication Table
// // // Print the table of 5 (5 × 1 to 5 × 10)

// for ( let i = 1; i <= 10; i++){
//         console.log(`5 x ${i} = ${5 * i}`);
//     }

// // //  Task 3 – Count Numbers Divisible by 3
// // // From 1 to 15, count how many numbers are divisible by 3.

// let count = 0;

// for ( let i = 1; i <= 15; i++){
//     if( i % 3 === 0){
//         count++;
//     }
// }
// console.log("count is", count);

// // // Print numbers from 20 to 5

// for ( let i = 20; i >= 5; i--){
//     console.log(i);
// }

// // // Print only odd numbers between 1–50

// for ( let i = 1; i <= 50; i++){
//     if( i % 2 !==  0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
// }

// // // //  Find factorial of 6

// let fact = 1;

// for ( let i = 1; i <= 6; i++){
//      fact *= i;
// }

// // // console.log("fact is",fact)

// // while loop

// let I = 0;
// while( I < 5){
//     console.log(I);
//     I++;
// }

// // // Task 1 – Print 1 to 5

// let num0 = 1
// while( i < 6){
//     console.log(num0);
//     i++;
// }

// // // Task 2 –
// // // Print even numbers from 2 to 10

// let count1 = 2;

// while( count1 <= 10){
//      console.log(count1);
//     i += 2;
//     }

// let counti = 1;

// while (counti <= 10) {
//     if (i % 2 === 0) {
//         console.log(counti);
//     }
//     i++;
// }

// // // Task 3 – Sum of numbers from 1 to 10

// let num2 = 1;
// let sum2 = 0;

// while (num2 <= 10) {
//   sum2 += i;
//   i++;
// }

// console.log("sum is",sum2);

// // Task

// for (let  i = 0; i < 3; i++){
//     console.log(i);
// }

// /* ======================= */

// // // for loop 

// // // Task 1 – Print Numbers 1 to 10

// for ( let i = 1; i <= 10; i++){
//     console.log(i);
// }

// // // Task 2 – Print Even Numbers from 2 to 20

// for ( let i = 2; i <= 20; i++){
//     if ( i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


// // // Task 3 – Print Multiplication Table of 5

// for ( let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${ 5 * i}`);
// }


// for( let i = 1; i <= 5; i++){
//     console.log( i * 2);
// }

// // // While loop

// // // Task 1 – Print 1 to 10

// let i0 = 1;

// while(10 >= i0 ){
//     console.log(i0);
//     i0++;
// }


// // // Task 2 – Print Odd Numbers from 1 to 15

// let num = 1;

// while(15 >= num ){
//     console.log(num);
//     num += 2;
// }

// // // Task 3 – Sum of Numbers from 1 to 5

// let _num = 1
// let _sum = 0;

// while( _num <= 5 ){
//     _sum += _num; 
//     _num++;
// }

// console.log(_sum);


// let sum = 0;
// let AI = 1;

// while ( AI <= 4){
//     sum += AI;
//     AI++;
// }

// console.log(sum);


// // 

// let ia = 2;
// let sum0 = 0;

// while( ia <= 10){
//         sum0 += ia;
//         i += 2;
// }
// console.log(sum0);

// let Ai = 2;
// let Asum = 0;

// while (i <= 6) {
//     Asum += Ai;
//     Ai += 2;
// }

// console.log(Asum);


// // Do while

// let add = 1;

// do{
//     console.log(add);
//     add++;
// } while ( i <= 5)

// let add1 = 10;

// do{
//     console.log(add1);
//     add1++;
// } while (add1 <= 5);

// let iC = 1;
// let sumC = 0;

// do {
//     sumC += iC;
//     iC++;
// } while ( iC <= 3);

// console.log(sumC);



// // Array 

// // Task 1 – Print All Elements

// let fruits = [ "apple", "banana", "mango", "orange"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // // Task 2 – Find Sum of Array Elements

// let numbers = [10, 20, 30, 40];

// console.log(numbers);



// let numbers1 = [5, 10, 15];

// for( let i = 0; i < numbers1.length; i++){
//     console.log(numbers1[i]);
    
// }

// let numbers2 = [1,2,3,4];
// let sums = 0;

// for( let i = 0; i < numbers2.length; i++){
//     sums += numbers2[i];
// }

// numbers2.push(5);
// console.log(sums);
// // numbers2.pop();
// console.log(sums);


// let arr12 = [ 2, 4, 6];

// let sum12 = 0;

// for (let i = 0; i < arr12.length; i++){
//     sum12 += arr[i];
// }

// console.log(sum12);



// let $arr = [ 1, 3 ,5 ,7];
// let $sum = 0;

// for( let i = 1; i < $arr.length; i++){
//     $sum += arr[i]
// }
// console.log$(sum);


// // ---

// // ### Array

// // ```
// // Index: 0   1   2   3
// // Value: 1   3   5   7
// // ```

// // `arr.length = 4`

// // Loop condition:

// // ```
// // i = 1
// // i < 4
// // ```

// // So loop runs for:

// // ```
// // i = 1, 2, 3
// // ```

// // It NEVER touches index 0.

// // ---

// // ## Correct Step-by-step

// // Start:

// // ```
// // sum = 0
// // ```

// // ---

// // ### Iteration 1

// // i = 1
// // arr[1] = 3

// // ```
// // sum = 0 + 3 = 3
// // ```

// // ---

// // ### Iteration 2

// // i = 2
// // arr[2] = 5

// // ```
// // sum = 3 + 5 = 8
// // ```

// // ---

// // ### Iteration 3

// // i = 3
// // arr[3] = 7

// // ```
// // sum = 8 + 7 = 15
// // ```

// // ---

// // Next:
// // i = 4
// // 4 < 4 false
// // Loop stops.

// // ---

// // ## Final Answer:

// // ```
// // 15
// // ```

// // ---

// // Where you went wrong:

// // 1. You ignored `i = 1`.
// // 2. Your sum math was inconsistent (0+1=1, then suddenly 2+3=6?).
// // 3. You didn’t track state properly.

// // This is not a syntax issue.
// // This is attention-to-detail issue.

// // You must slow down when tracing.

// // ---


// let arrX = [10,20,30];

// let sumX = 0;

// for( let i = 0; i <= arrX.length; i++){
//    sumX += arrX[i];
// }

// console.log(sumX);

// let arrnew = [10, 20, 30, 40];

// let sumnew = 0;

// for (let i = 0; i <= arrnew.length; i++) {
//     sumnew += arr[i];
// }

// console.log(sumnew);

// let number = [ 10, 20 ,30 ,40];
// let sumZ = 0;

// for( let i = 1; i < number.length; i++){
//     sumZ += number[i]
// }
// console.log("sum is", sumZ);

// //  Array 

// const arr2 =[1,2,3];

// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();

// console.log(arr2);

// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// let arr3 = [10,20,30];


// for (let  i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
// }

// for( let Value of arr) {
//     console.log(Value);
// }

// let arr4 = [ 5, 10, 15];

// for( let Value of arr4){
//     console.log(Value * 2);
// }


// //.........  Logic Problems...........//

// // Reverse an array

// const arr5 = [1,2,3,4,5];
// let reversedto = arr5.reverse();

// console.log(reversedto);



// let arrQ =[1, 2, 3, 4, 5];
// let reversed = [];

// for( let i = arrQ.length - 1; i >= 0; i--){
//     reversed.push(arr[i]);
// }

// console.log(reversed);


// // Step 1️⃣
// // let arr = [1, 2, 3, 4, 5];

// // Original array.

// // Length = 5
// // Indexes = 0 1 2 3 4

// // Important:
// // Last index = arr.length - 1
// // = 5 - 1
// // = 4

// // If you don’t understand this, loop logic weak.

// // Step 2️⃣
// // let reversed = [];

// // Empty array create pannrom.
// // Because we’re going to store reversed values here.

// // Step 3️⃣ The Loop
// // for (let i = arr.length - 1; i >= 0; i--)

// // Break this carefully.

// // Initial value:

// // i = arr.length - 1
// // → i = 4

// // So first value:
// // arr[4] = 5

// // We start from the end.

// // Condition:

// // i >= 0

// // Loop will run until index 0.

// // If you wrote i > 0 →
// // You will miss index 0. That’s a common mistake.

// // Decrement:

// // i--

// // Each time:
// // 4 → 3 → 2 → 1 → 0

// // Step 4️⃣ Inside Loop
// // reversed.push(arr[i]);

// // Let’s simulate manually.

// // Iteration 1:

// // i = 4
// // arr[4] = 5
// // reversed = [5]

// // Iteration 2:

// // i = 3
// // arr[3] = 4
// // reversed = [5, 4]

// // Iteration 3:

// // i = 2
// // arr[2] = 3
// // reversed = [5, 4, 3]

// // Iteration 4:

// // i = 1
// // arr[1] = 2
// // reversed = [5, 4, 3, 2]

// // Iteration 5:

// // i = 0
// // arr[0] = 1
// // reversed = [5, 4, 3, 2, 1]

// // Loop stops (next i = -1, condition fails).

// // Final Output
// // [5, 4, 3, 2, 1]

// let arrs = [10,20,30,40];
// let check = [];

// for( let i = arrs.length - 1; i >= 0; i--){
//     check.push(arrs[i]);
// }

// console.log(check);

// let Anum = [10,20,30,40];
// let Areversed = Anum.reverse();

// console.log(Areversed);


// let letter = ["a","b","c","d"];
// let reversed1 = [];

// for ( let i = letter.length - 1; i >= 0; i--){
//     reversed1.push(letter[i]);
// }

// console.log(reversed1);


// let letter2 = ["a","b","c","d"];
// let reversed2 = [];

// for (let i = letter2.length - 1, j = 0; i >= 0; i--, j++) {
//     reversed2[j] = letter[i];
// }

// console.log(reversed2);

// // Find max number :

// const nums = [4, 8, 1, 9];
// let max = nums[0];

// for( let i = 1; i < nums.length; i++){
//     if(nums[i] > max) {
//         max = nums[i];
//     }
// }

// console.log(max);


// let arrF = [3, 7, 2, 9, 5];
// let maxF = arr[0];

// for(let i = 1;  i < arrF.length; i++ ){
//     if( arrF[i] > maxF){
//         maxF = arrF[i];
//     }
// }

// console.log(maxF);



// let arr = [10, 5, 20 , 8];
// let maxN = arr[0];

// for( let i = 1;  i < arr.length; i++){
//     if( arr[i] > maxN){
//         maxN = arr[i];
//     }
// }

// console.log(maxN);



// let arr0 = [-5, -2, -10, -1];
// let max0 = arr[0];

// for( let i = 1; i < arr0.length; i++){
//     if( arr0[i] >  max0){
//         max0 = arr0[i];
//     }
// }

// console.log(max0);

// // Remove duplicates

// const nums = [1,2,2,3];
// let unique = [];

// for( let num of nums){
//     if(!unique.includes(num)){
//         unique.push(num);
//     }
// }
// console.log(unique);

// let input = [1,2,2,3,4,4,5];
// let remove = [];

// for( let i = 0; i < input.length; i++){
//     if(!remove.includes(input[i])){
//         remove.push(input[i]);
//     }
// }

// console.log(remove);

// for( let num of input){
//     if(!remove.includes(input)){
//         input.push(num)
//     }
// }

// console.log(remove);


let alpha = ["a", "b", "a", "c", "d"];
let clear = [];

for( let i = 1; i < alpha.length; i++){
    if(!clear.includes(alpha[i])){
        clear.push(alpha[i])
    }
}

console.log(clear);
