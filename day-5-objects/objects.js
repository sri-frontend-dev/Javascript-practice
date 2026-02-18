//  Objects

const { use } = require("react");

//  Objects – Basics

const user = {
    name: "Sri",
    age: 23,
    isDeveloper: true
};

console.log(user.name);
console.log(user.age);

// Object with Function

const user = {
    name :"surya",
    age : 45,
    greet : function(){
        console.log("Hello " + this.name);
        console.log("Your age "+ this.age);

    }
};

user.greet();

//  Nested Object

 const student = {
    name : "Kumar",
    marks: {
        tamil: 98,
        maths: 90,
        science: 85,
    }
 };

 console.log(student.marks.maths);
 console.log(student.marks.tamil);
 console.log(student.marks.science);

// task 1

const product = {
  name: "Laptop",
  price: 50000,
  inStock: true,
};

console.log(product.name , "cost", product.price,);

// Task 2

const person = {
  name: "sri",
  skills: ["HTML", "CSS", "JS"],
};

console.log(person.skills);

// Task3

const user = {
  name: "sridhar",
  age: 35,
  city: "Chennai",
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

const phone = {
  brand : "VIVO",
  price: 25000,
  color: "liteblue",
}

console.log(phone.brand, phone.price, phone.color);

console.log(`${phone.brand},${phone.price},${phone.color}`);

const student = {
  name: "Vijay",
  age: 40
};


console.log(student["name"]);
console.log(student["age"]);

const person = {
  name: "Sri",
  age: 22
};

const prop = "age";

console.log(person.prop);
console.log(person[prop]);

//

const student = {
  name: "Ravi",
  age: 34
};

student.city = "Chennai";
student.age = 24;
delete student.city;

console.log(student);

console.log(student.age);
console.log(student);

const user = {
  name: "Sri"
};

user.age = 22;
delete user.name;

console.log(user.age);


 // 

const user = {
  name : "Ramesh",
  skills : ["HTML","CSS","JS","REACT"]
};

console.log(user.skills[3]);


const uesr = {
  name : "Siva",
  skills: ["HTML","CSS"]
};

uesr.skills.push("JS");

console.log(uesr.skills.length);


const user1 = {
  name: "Guru"
};

const copy = user1;
copy.name = "Ram";

console.log(user1.name);

const user = {
  name: "Sri"
};

const copy = { ...user };

copy.name = "Ram";

console.log(user.name);

 Mini  Exercies

let student = [
  { id: 1, name: "Sri", marks: 85 },
  { id: 2, name: "Ram", marks: 90}
];

console.log("All Student");
student.forEach(student => {
  console.log(`${student.id}- ${student.name}- ${student.marks}`);
});

student.push({ id: 3, name:"kumar", marks: 75});

student = student.map(student =>{
  if (student.id === 1) {
    return{...student, marks:95}
  }
  return student;
 });

student = student.filter(student => student.id !== 2);

console.log("Final student List:");
console.log(student);

let a = { value: 10 };
let b = { ...a };
let c = a;

b.value = 20;
c.value = 30;

console.log(a.value);
