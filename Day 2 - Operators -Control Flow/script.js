// Operators
// Arithmetic   +  -  *  /  %  **


let num = 5 % 2 
console.log(num); // 1

let num1 = 2 ** 3
console.log(num1); // 8
 
// Task 1

let a = 15;
let b = 4;

console.log("addition", a + b);
console.log("subtraction", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("remainder", a % b);

// Task 2

let count  = 5;

console.log(count);
count++
console.log(count);
++count
console.log(count);

// Task 3

let totalMarks = 450;
let subjects = 5;

console.log(`Average is ${totalMarks / subjects}`);



// Comparison   ==   !=   >   <   >=   <= ===  !==

let ques = 0 == false
console.log(ques);    // true

let ques1 = 0 === false
console.log(ques1);  // false

// Task 1

let x = 10;
let y = "10"

console.log( x == y);  // true
console.log( x === y); // false

// Task 2

let age1 = 18;

console.log( age1 > 18);  // false
console.log( age1 >= 18);  // true
console.log( age1 < 21);   // true

// Task 3

let mark = 35;

console.log( mark >= 35); //true


// Logical Operators     &&   ||   !


let human = true && "hello";
console.log(human);  // hello

let human1 = false || "hi" 
console.log(human1);  // hi


// Task 1

let myage = 20;
let hasID = true;

console.log( myage >= 18 && hasID);  //true

// Task 2

let hasTicket = false;
let isVIP = true;

console.log( hasTicket || isVIP);  // true


// Task 3

let isLoggedInhome = false;

console.log( !isLoggedInhome);   // true

// Truthy & Falsy

// Falsy values (ONLY these 6)

// false
// 0
// -0
// ""   // empty string
// null
// undefined
// NaN

// truthy

// "0"     // truthy
// []      // truthy
// {}      // truthy




// task 1

 if(0){
    console.log("0 is truthy");
 } else {
    console.log("0 is falsy");   // 0 is falsy
 }

 if(1){
    console.log("1 is truthy");  // 1 is truthy
 } else {
    console.log("1 is falsy");
 } 

 if(""){
    console.log("Empty string is truthy");
 } else {
    console.log("Empty string is falsy"); // Empty string is falsy  
 }


// task 2

let value = "0";
console.log(Boolean(value));   // true

// task 3
let username = "";

   if (username){
      console.log("username valid");
   } else {
    console.log( "username missing");    // username missing
   }


// if / else 
let ageIs = 20;

if ( ageIs >= 18 ){
    console.log("adult");    // adult
} else {
    console.log("Minor");
}

// Task 1

let mymark = 45;

if(mymark >= 35){
    console.log("Pass");  // pass
} else {
    console.log("Fail");
}

// Task 2

let myageIs = 16;

if(myageIs >= 18){
    console.log("Eligible");
} else {
    console.log("Not Eligible");   // Not Eligible
}

// Task 3 

let isLoggedIn1 = true;

if(isLoggedIn1) {
    console.log("Welcome");   // Welcome
} else {
    console.log("Please login");
}

// Switch 

let days = "Mon";

 switch (days) {
    case "Mon":
        console.log("Mon");
        break;
    case "Tue":
        console.log("Tue");
        break;
    default:
        console.log("Invalid");
}


// Task 1 - Day name

let day = 1;                          
 
switch (day){
    case 1:
        console.log("Monday");   
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default: 
        console.log("Invalid day");        
}


// Task 2 - Traffic light

let color = "red";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}


// Task 3 – Simple menu

let choice = 2;

switch(choice){
    case 1:
        console.log("Add");
        break;
    case 2:
        console.log("Edit");
        break;
    case 3:
        console.log("Delete");
        break;
    default:
        console.log("Invalid choice");
}

// Ternary operator

// Task 1

let marks = 40; 
let result1 =  marks >= 35 ?  "Pass" :"Fail";
console.log(result1);

// Task 2

let age = 17;
let person = age >= 18 ? "Eligible" : "Not eligible";
console.log(person);
   
// Task 3

let isLoggedIn2 = false;
let homepage = isLoggedIn2 ?  "Welcome" : "Please login";
console.log(homepage);

// TASK 1

console.log( 0 || "hello");       // hello
console.log("" && "Hi");            //""
console.log(null || undefined || "35");  // 35


// TASK 2

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("welcome");     // "false" is a string, and non-empty strings are truthy So "false" still prints Welcome — that’s the bug.
}

// TASK 3

let scroe = 35;

if(scroe >= 40) {
    console.log("pass");
} else {
    console.log("Fail");
}

let score  = 35; 
let result = score >= 40 ? "pass" : "Fail";
console.log(result);












