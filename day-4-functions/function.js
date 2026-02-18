// function Types

// Basic Function

function call() {
    console.log("sri");
}

call();

// Function with Parameters

function greet (name){
    console.log("hello " + name);
}

// greet("sri");

// Function with Return

function add (a,b){
    return a + b;
}

let result = add(5,3);
 console.log(result);

// Function width parameter

function square (num){
    return num * num;

}

let result1 = square(4);
console.log(result1);

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(7));

// Function Expression

const greet = function() {
    console.log("Hello");
};

greet();

const multiplay = function(a,b){
    return a * b;

};
console.log(multiplay (3,4));
console.log(multiplay(5,6));

// Arrow Function

const add = (a,b) => {
    return a + b;
};

console.log(add(4,6));

let num = (a,b ) => {
    return a * b;
}

console.log(num(5,7));

let subtract = (a, b) => a - b;

console.log(subtract(10, 4));
console.log(subtract(20, 5));

const isEven = (num) => {
  if (num % 2 === 0) return true;
  else {
    return false;
  }
};

console.log(isEven(4));
console.log(isEven(7));


//  short simple;

const isEven = (num) => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));   // Anonymous Function  

const maxoftwo = ( a,b ) => a > b? a : b;

console.log(maxoftwo(20,21));
console.log(maxoftwo(50,27));

//  Anonymous Function

setTimeout(function(){
  console.log("hello");
}, 3000);


const checkNumber = function(num){
     if(num > 0){
          return  "positive";
     }
     else {
          return   "Ngeative";
     } 
     
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));


const checkNumber1 = function(num) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
};

// Callback Function

function processNumber(num, callback){
     console.log("processing number:", num);
     callback(num);

     function square(num){
          callback("square is :", num * num );
     }
}
processNumber(5, square);

function processNumber(num, callback) {
  console.log("Processing number:", num);
  callback(num);
}
function square(num) {
  console.log("Square is:", num * num);
}
processNumber(5, square);


function greetUser(name, callback){
  console.log("Hello" + name);
  callback();  
}
function welcome(){
   console.log("welcome!");     
}

greetUser("Sri", welcome);

function greetUser(name, callback) {
  function welcome() {
    console.log("Welcome!");
  }

  console.log("Hello " + name);
  welcome();
}

greetUser("Sri");
