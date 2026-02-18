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

const userp = {
    name :"surya",
    age : 45,
    greet : function(){
        console.log("Hello " + this.name);
        console.log("Your age "+ this.age);

    }
};

userp.greet();

//  Nested Object

 const studentreg = {
    name : "Kumar",
    marks: {
        tamil: 98,
        maths: 90,
        science: 85,
    }
 };

 console.log(studentreg.marks.maths);
 console.log(studentreg.marks.tamil);
 console.log(studentreg.marks.science);

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

const usery = {
  name: "sridhar",
  age: 35,
  city: "Chennai",
};

console.log(usery.name);
console.log(usery.age);
console.log(usery.city);

const phone = {
  brand : "VIVO",
  price: 25000,
  color: "liteblue",
}

console.log(phone.brand, phone.price, phone.color);

console.log(`${phone.brand},${phone.price},${phone.color}`);

const student2 = {
  name: "Vijay",
  age: 40
};


console.log(student2["name"]);
console.log(student2["age"]);

const person1 = {
  name: "Sri",
  age: 22
};

const prop = "age";

console.log(person1.prop);
console.log(person1[prop]);

//

const student1 = {
  name: "Ravi",
  age: 34
};

student1.city = "Chennai";
student1.age = 24;
delete student1.city;

console.log(student1);

console.log(student1.age);
console.log(student1);

const user2 = {
  name: "Sri"
};

user2.age = 22;
delete user2.name;

console.log(user2.age);


 // 

const userI = {
  name : "Ramesh",
  skills : ["HTML","CSS","JS","REACT"]
};

console.log(userI.skills[3]);


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

const users = {
  name: "Sri"
};

const copy = { ...users };

copy.name = "Ram";

console.log(users.name);

//  Mini  Exercies

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
