// Number =>

// console.log(123);
// console.log('123');

// let a = b = c = 3;

// console.log(a, b, c);

// let num = 1,
// a = 2,
// b = 3;

// console.log(num, a, b);

// ==================================

// bigInt =>
// console.log(99817973636382888n + 1n);

// ==================================


// string => '' "" ``
// let name = "Webbrain Academy"

// console.log(`Welcome to ${name} IT center`);

// console.log("Welcome \nto Webbrain");
// console.log("Welcome to 'Webbrain'");
// console.log('Welcome to "Webbrain"');

// console.log('Hello JavaScript seperated');

// let text = "WebBrain Academy";

// console.log(text);

// ==================================


// boolean =>
// console.log(true);
// console.log(false);

// ==================================

// undefined vs null =>
// let a;
// let b = null;

// console.log(a, b);
// console.log(typeof a,typeof b);
// console.log(null == undefined); => true
// console.log(null === undefined); => false
// console.log(null + 1);
// console.log(undefined + 1);

// let a;
// let b = null;

// console.log(a + 1);
// console.log(b + 1);
// console.log(b === b); => true
// console.log({b} === {b}); => false

// ==================================

// symbol

// let a = Symbol("text");
// let b = Symbol("text");

// console.log(a == b); => false
// console.log(a === b); => false

// ==================================

// object --> array obj function

let arr = ['Abbos', 21, 'Ibrohimov', {}, function test() { }] // index orqali ifodalanadi

let obj = { name: 'Abbos', surname: 'Ibrohimov', age: 21 };  // key orqali ifodalanadi

let func = () => { }

function test() {
    console.log(arr[0]);
    console.log(obj.name);
}
test()