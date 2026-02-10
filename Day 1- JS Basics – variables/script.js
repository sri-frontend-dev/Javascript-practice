// /* 1. variables */

let code = 30;
code = 50;

console.log(code);


const myage = 18;

console.log(myage);


const user = {name: "sri"};
user.name = "frontend Dev";

console.log(user.name);

// /* task */

const name = "Sridhar";

console.log(name);

// /*  */
let a = 10;
let b = 20;

let sum = a + b;
let difference = b - a;
let product = a * b;

console.log(sum, difference,product);

// /* ------ */
 let age = 25;
 age = 26;
 console.log(age);  // let → reassign allowed
 

const age2 = 25;
age = 25;
console.log(age2);   // const → reassign NOT allowed


let city = "chennai";

console.log(`I live in ${city}`);

// /*  */

let price = 1000;
let discount = 10;

let finalprice = price - (price * discount / 100);
console.log(`Final price is ${finalprice}`);


console.log(x);
var x = 5;


let count  = 0;

count +=1;

console.log(count);

count +=1;

console.log(count);


// /* Data Types */

let xy = 10;
let cy = xy;
cy = 20;

console.log(xy);

let z  = { value: 10};
let h = a;
h.value = 20;

console.log(a);


let  ab = 10;
let  ba = "number";
let  num =  true;
console.log( typeof ab);
console.log( typeof ba);


let ai = "10";
let yi = 5;
console.log(ai + yi);
console.log(Number(ai) + yi);


let ac;
let bc = null;

console.log(ac);  //undefined
console.log(typeof ac); //undefined
console.log(bc); //null
console.log(typeof bc);   // object



let nums = 10;
let nums1 = a;
b = 20;

let barr = [1,2];
let carr = [...arr1];
arr2.push(3);

console.log( a,b);  // 10 20
console.log(arr1, arr2); // (3) [1, 2, 3], (3) [1, 2, 3] 
                            
/* Type conercion */

let num1 = "5" + 1;
let num2 = "5" - 1;
let correct = true + 1;
let correct2 = false -1; 


console.log(num1,num2,correct,correct2 );

let sub = 8 == "8";
let sub2 = 8 === "8";

console.log(sub,sub2);


/*... TASKS... */

console.log(typeof null); // object - historical JS bug
console.log("10" + 10);  // 1010 -  string concatenation
console.log("10" - 5);   // 5 -  numeric coercion


const total = 100;   // const does not allow reassignment
total = total + 50;  // total = total + 50 is reassigning, not modifying
console.log(total);   // TypeError: Assignment to constant variable

let total2  = 100;
total2 = total2 + 50;
console.log(total2);

const total1 = {value: 100};
total1.value += 50;
console.log(total1);



const arr1 = [1,2,3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);   // (4) [1, 2, 3, 4]

    // Arrays are reference types
    // arr1 and arr2 point to the same memory
    // push() mutates the array
    // So change reflects in both variables

const apple = [1,2];
const ball = [...apple];
ball.push(3);
console.log(apple);  // [1,2]
    //  [...] (spread operator) creates a NEW array
    // a and b now point to different memory locations
    // push() mutates only b
    // a remains unchanged
    // “Spread operator creates a shallow copy, so changes don’t affect the original array.”


















