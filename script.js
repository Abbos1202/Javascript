// let user = {
//     name: "webbrain",
//     sayHi: function() {
//         console.log("Hi");
//     }
// }

// user.sayHi()

// function sayHi() {
//     console.log("Hi");
// }

// let name = "webbrain";

// let user = {
//     // name: "webbrain",
//     name,
//     // sayHi: sayHi
//     // sayHi
//     sayHi() {
//        console.log("I said Hi");
//     }
// }

// user.sayHi()

// let user = {
//     name: "webbrain",
//     sayHi() {
//         // console.log(this);
//         // console.log(user);
//         // console.log(`Hi ${this.name}`);
//         // console.log(`Hi ${user.name}`);
//     },
//     getName: function() {
//        return () => {
//         console.log(`Hi ${this.name}`);
//        }
//     }
// }

// // user.sayHi()

// let usr = user;

// // user = null;

// usr.sayHi()
// usr.getName()(); // curry function

// function getName(name) {
//     console.log(new.target);
//     // this.name = name,
//     // this.sayHi = function () {
//     //     console.log("Hi", this.name);
//     //     return 'hey'
//     // }
// }

// new getName("Eshmat")
// new getName("Toshmat").sayHi()
// // console.log(new getName().name)

// let func = {};

// func.name = "Abbos"

// console.log(func);

let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1); // Symbol(id)
// console.log(id1 == id2); // false
// console.log(id1 === id2); // false

// let obj = {
//     id1: "webbrain",
//     [id1]: "webbrain",
//     ["id2"]: "academy1",
//     id2: "academy2",
//     id2: "academy3",
// }

// // console.log(obj["id1"]); // webbrain
// // console.log(obj[id1]); // webbrain
// // console.log(obj[id2]); // undefined
// // console.log(obj["id2"]); // academy
// console.log(obj.id2);

// let obj ={
//     name: "Webbrain",
//     title: "IT center",
//     age: 23,
//     child: {
//         childname: "testing name"
//     }
// }

// const {name: newName, title, age, child: {childname: test}} = obj

// console.log(test);
// console.log(newName);
// console.log(title);
// console.log(age);

// console.log("title" in obj); // true

// for(value in obj) {
//     // console.log(value);
//     console.log(obj[value]);
//     console.log(obj.value);
// }

// let obj = {
//     child: {
//         childname: "testing name"
//     }
// }

// console.log(obj);

// obj = { ...obj.child }

// console.log(obj);

// let obj = {
//     name: "Webbrain",
//     age: 23,
// }

// console.log({obj, name: "IT center"}); // { obj: { name: 'Webbrain', age: 23 }, name: 'IT center' }
// console.log({...obj, name: "IT center"}); // { name: 'IT center', age: 23 }
// console.log({ name: "IT center", ...obj}); // { name: 'Webbrain', age: 23 }
// console.log({ name: "IT center", age: 23, name: "Webbrain"}); // { name: 'Webbrain', age: 23 }

// let obj = {
//     name: "Webbrain",
//     age: 32,
//     child: {
//         name: "Eshmat",
//         age: 23,
//         child: {
//             name: "Shumbola",
//             age: 18,
//         }
//     }
// }

// let sum = 0;

// while (obj) {
//     sum += obj.age
//     obj = obj.child
// }

// console.log(sum);

// while (1) {
//     if (obj) sum += obj.age
//     else break;
//     obj = obj.child
// }

// console.log(sum);

// while(1) {
//     if(obj) {
//         // console.log(obj.age);
//         // sum = sum + obj.age
//         sum += obj.age
//     }else{
//         break;
//     }
//     obj = obj.child
// }

// let obj1 = {name: "webbrain"}
// let obj2 = {name: "webbrain"}
// let obj3 = obj1

// obj1.name = "academy"

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false
// console.log(obj1 === obj3); // true
// console.log(obj1); // {name: "academy"}
// console.log(obj3); // {name: "academy"}

// obj1 = {name: "webbrain"}

// console.log(obj1); // {name: "webbrain"}
// console.log(obj3); // {name: "academy"}

// const employee = {
//     id: 1,
//     name: "Abbos",
//     surname: "Ibrokhimov",
//     occupation: "Frontend developer",
//     age: 21,
// }

// // console.log(employee.id, employee.name, employee.surname, employee.occupation, employee.age)

// const {id, name, surname, occupation, age} = employee

// console.log(id, name, surname, occupation, age)

const obj = {
  name: "John",
  age: 24,
  status: "developer",
};

const anotherobj = { ...obj };

console.log(anotherobj);
