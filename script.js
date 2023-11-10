// Numbers

// ---Numbers representation
// ---Decimal, Binary va Hex
// ---Math => abs, floor, ceil, round trunc, random, min, max, pow, sign, sqbrt, cbrt
// ---Methods => toString, toFixed, parseInt, parseFloat, isNaN, Object.is, toPrecision
// ---Strang JS
// ---Optional chaining

// console.log(1_000_000 + 1);
// console.log(12.23382);
// console.log(1e6);
// console.log(1e6 + 1);
// console.log(1e-6); // kasrga o'tib ketadi = 0.000001
// console.log(1e500); // Infinity

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); 
// console.log(0.2 + 0.2 === 0.4); 
// console.log(0.3 + 0.4 === 0.7); 

// let num = "0.1 + 0.2 * 3";

// console.log(+num.toFixed(1));  

// console.log(parseInt(num)); 
// console.log(parseFloat(num)); 
// console.log(Number(num));
// console.log(Number(eval(num))); 
// console.log(eval(num)); 
// console.log(Number.parseInt(num));
// console.log(Number.parseFloat(num)); 

// console.log(+"1_000" + 1); // NaN

// let num = 5;

// console.log(num.toString(16)); 
// console.log(parseInt("5", 16)); 


// console.log(isNaN(+"1000")); // false
// console.log(isNaN(+"1_000")); // true


// let obj1 = Object.is("web", "webb"); // false
// let obj2 = Object.is("web", "web"); // true
// let obj3 = Object.is(123, 1234); // false
// let obj4 = Object.is(123, 123); // true

// console.log(obj4);

// let num1 = 5.122717;
// let num2 = 0.0005022717;

// console.log(num1.toPrecision(2));
// console.log(num2.toPrecision(3)); 

// console.log(9_999_999_999_999_999);  // 10000000000000000

// Math methods

// console.log(Math.PI); // 3.14
// console.log(Math.abs(10));
// console.log(Math.abs(-10)); 
// console.log(Math.round(2.5)); 
// console.log(Math.round(2.4)); 
// console.log(Math.floor(2.999)); 
// console.log(Math.ceil(2.0001)); 
// console.log(Math.trunc(2.999)); 

// console.log(Math.floor(-10.999)); // -11
// console.log(Math.trunc(-10.999)); // -10

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.trunc(Math.random() * 10));
// console.log(parseInt(Math.random() * 10));

// console.log(Math.min(1, 3, 5, 0, 10, 9, 98, 1000, 1245)); 
// console.log(Math.max(1, 3, 5, 0, 10, 9, 98, 1000, 1245)); 

// console.log(Math.pow(5, 2)); 
// console.log(5 ** 2); 

// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27)); 

// console.log(Math.sign(-0)); // -0
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(1)); // 1
// console.log(Math.sign(-1)); // -1
// console.log(Math.sign(5)); // 1
// console.log(Math.sign(-5)); // -1
// console.log(Math.sign("123")); // -1
// console.log(Math.sign("-123")); // -1
// console.log(Math.sign("123a")); // NaN

let obj = { name: "Abbos", child: { name: "Child name" } };
let obj1 = { name: "Abbos", child: null };

console.log(obj); // { name: 'Abbos', child: { name: 'Child name' } }
console.log(obj.name); // Abbos
console.log(obj.age); // undefined
console.log(obj.child?.name); // undefined
console.log(obj.child?.age); // undefined
