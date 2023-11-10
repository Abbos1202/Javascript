8-dars


---Number representation
---Decimal, Binary va Hex
---Math : abs, floor, ceil, round, trunc, random, min, max, pow, sign, sqrt, cbrt 
---Methods : toFIxed, toString, parseInt, parseFloat, isNaN, Object.is, toPrecision
---Strang JS
---Optional chaining

----------------------------------------------------

let num = "0.1 + 0.2 * 3";

console.log(+num.toFixed(1));  + , Number,

console.log(parseInt(num)); ko'rgan birinchi raqamini oladi
console.log(parseFloat(num)); ko'rgan birinchi fractionini oladi
console.log(Number(num)); NaN
console.log(Number(eval(num))); eval() => stringdagi numberlar ustida amal bajarish uchun
console.log(eval(num)); eval() => stringdagi numberlar ustida amal bajarish uchun va number qilib beradi
console.log(Number.parseInt(num)); ko'rgan birinchi raqamini oladi
console.log(Number.parseFloat(num)); ko'rgan birinchi fractionini oladi

----------------------------------------------------

let num = 5;

console.log(num.toString(16)); Binary ga o'tkazish
console.log(parseInt("5", 16)); Binary dan decimal ga o'tkazish

hexadecimal => asosan color larni ifodalsh uchun ishlatilinadi. 0xff === 255

----------------------------------------------------

Object.is => 2 ta ma'lumotni solishtirib beradi va boolean qiymat qaytadi

let obj1 = Object.is("web", "webb"); false
let obj2 = Object.is("web", "web"); true
let obj3 = Object.is(123, 1234); false
let obj4 = Object.is(123, 123); true

console.log(obj4);

----------------------------------------------------

console.log(num1.toPrecision(2));
console.log(num2.toPrecision(3)); oldidagi 0 larni hammasi ignore qilib yuboradi

----------------------------------------------------

 Math methods

console.log(Math.PI); 3.14
console.log(Math.abs(10)); musbat son qaytaradi
console.log(Math.abs(-10)); musbat son qaytaradi
console.log(Math.round(2.5));  round >= .5 yaxlitlab beradi 3
console.log(Math.round(2.4)); 2

console.log(Math.floor(2.999)); 2 pastga qarab yaxlitlaydi
console.log(Math.ceil(2.0001)); 3 yuqoriga qarab yaxlitlaydi
console.log(Math.trunc(2.999)); 2 kasr qismini chiqarib yuboradi

console.log(Math.floor(-10.999)); -11
console.log(Math.trunc(-10.999)); -10

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.trunc(Math.random() * 10));
console.log(parseInt(Math.random() * 10));

console.log(Math.min(1, 3, 5, 0, 10, 9, 98, 1000, 1245)); 0 => minimum son
console.log(Math.max(1, 3, 5, 0, 10, 9, 98, 1000, 1245)); 1245 => maximum son

console.log(Math.pow(5, 2)); 25 => darajaga ko'tarib beradi
console.log(5 ** 2); 25 => darajaga ko'tarib beradi

console.log(Math.sqrt(9)); 3 => ildiz ostidan chiqarib beradi   square root
console.log(Math.cbrt(27)); 3 => 3 darajali ildiz ostidan chiqarib beradi   cube root

console.log(Math.sign(-0)); -0
console.log(Math.sign(0)); 0
console.log(Math.sign(1)); 1
console.log(Math.sign(-1)); -1
console.log(Math.sign(5)); 1
console.log(Math.sign(-5)); -1
console.log(Math.sign("123")); -1
console.log(Math.sign("-123")); -1
console.log(Math.sign("123a")); NaN

----------------------------------------------------

Optional chaining => nested bo'lganda va object bo'lmagan xolatlarda
let obj = { name: "Abbos", child: null };

console.log(obj); { name: 'Abbos', child: { name: 'Child name' } }
console.log(obj.name); Abbos
console.log(obj.age); undefined
console.log(obj.child?.name); undefined
console.log(obj.child?.age); undefined
