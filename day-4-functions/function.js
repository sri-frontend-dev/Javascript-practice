// // function Types


// // Basic Function

// function call() {
//     console.log("sri");
// }

// call();

// // Function with Parameters

// function greet (name){
//     console.log("hello " + name);    
// }

// greet("sri");


// // Function with Return

// function add (a,b){
//     return a + b;
// }

// let result = add(5,3);
// console.log(result);


// // Function width parameter

// function square (num){
//     return num * num;
    
// }

// let result = square(4);
// console.log(result);

// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(7));


// Function Expression

// const greet = function() {
//     console.log("Hello");
// };

// greet();

// const multiplay = function(a,b){
//     return a * b;

// };
// console.log(multiplay (3,4));
// console.log(multiplay(5,6));


// Arrow Function 

const add = (a,b) => {
    return a + b; 
};

console.log(add(4,6));

let num = (a,b ) => {
    return a * b;
}

console.log(num(5,7));


