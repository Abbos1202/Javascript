1 - dars

---JS nima ?
---JS qanday ishlaydi 
---Single Thread
---Variables --> var let const
---Data types
---Primitive --> number string null boolean undefined symbol bigInt
---Non-primitive --> object array functions
---null vs undefined
---alert() prompt() confirm()

-------------------------------------

JavaScript was invented by Brendan Eich in 1995.
Developed for Netscape 2, LiveScript
Became ECMA in 1997.

What makes JavaScript unique?
   Full integration with HTML/CSS.
   Simple things are done simply.
   Supported by all major browsers and enabled by default.

-------------------------------------

JS compiled by 
   in html
   node console
   online js compilers

--------------------------------------

Single Thread => bir vaqtni o'zida bitta action bajara oladi
Reserved keyword => var let const function ....

-------------------------------------

var => Es6 gacha ishlatilgan, qiymatni update qilsa buladi, va bir xil nom bilan yana o'zgaruvchi
       yaratsa buladi, hoisting bo'ladi va qiymati undefined ga teng bo'ladi
let => Es6 da qo'shiilgan, qiymat update buladi, lekin bir xil nom bilan yana o'zgaruvchi yaratib 
       bo'lmaydi, hoisting bo'lmaydi
const => Es6 da qo'shilgan, uzgarmas, qiymat update bo'lmaydi, bir xil nom bilan o'zgaruvchi yaratib 
         bo'lmaydi, hoisting bo'lmaydi
primitive => qiymat call stack da saqlanadi
non-primitive => qiymat heap da saqlanadi, va call stackda o'sha heapdagi qiymatiga bo'lgan ko'rsatkich,
                 yani reference saqlaydi

-------------------------------------

let vs const => variable ni declare qilish uchun const(constant) => o'zgarmas, var va let => o'zgartirsa bo'ladi

var = global

-------------------------------------

Data types
   Primitive ===> Number, String, Boolean,  Null, Undefined, Symbol, BigInt
   Non-Primitive ===> Object (object, function array)

-------------------------------------

index => 0 dan boshlanadi
length => 1 dan boshlanadi

-------------------------------------

ctrl + ~ => terminal open, close
cd => change direction
Es6 => EcmaScript6 => js ni 2015 yilgi versioni

-------------------------------------

let text;
console.log(text);
O'zgaruvchi bor lekin qiymati yo'q, bu holatda  undefined qaytaradi

-------------------------------------

console.log(text);
O'zgaruvchi yo'q va qiymati ham yo'q, bu holatda text is not defined chiqadi

-------------------------------------

console.log("Welcome \nto Webbrain");  => \n -->  new line

-------------------------------------

null => typeof  object 
undefined => typeof undefined
console.log(null == undefined); => true
console.log(null === undefined); => false
console.log(null + 1); => 1
console.log(undefined + 1); => NaN

-------------------------------------

let a;
let b = null;

console.log(a + 1); => NaN
console.log(b + 1); => 1
console.log(b === b); => true
console.log({b} === {b}); => false

-------------------------------------

symbol

let a = Symbol("text");
let b = Symbol("text");

console.log(a == b); => false
console.log(a === b); => false

-------------------------------------

object --> array obj function

let arr = ['Abbos', 21, 'Ibrohimov', {}, function test() { }] index orqali ifodalanadi

let obj = { name: 'Abbos', surname: 'Ibrohimov', age: 21 };  key orqali ifodalanadi

let func = () => { }

function test() {
    console.log(arr[0]);
    console.log(obj.name);
}
test()

-------------------------------------

function => qachon chaqirilsa keyin yuradi

-------------------------------------

string nima ? 

stringni 3 xil usuli bor, '' "" ``
`` => qo'shimcha variable ishlatib ketish imkoniyati bor, buning uchun ${} va buni ichida ana shu 
      variable nomi yoziladi

-------------------------------------

alert('hey') => javascript faylda yozsa error beradi buni html faylda <script>alert('hey')</script> 
                orqali yozish mumkin va browserda message ko'rinishida chiqadi

-------------------------------------

prompt('hey') => javascript faylda yozsa error beradi buni html faylda <script>prompt('hey')</script>
                 orqali yozish mumkin va browserda input ko'rinishida chiqadi

-------------------------------------

confirm('hey') => javascript faylda yozsa error beradi buni html faylda <script>confirm('hey')</script>
                  orqali yozish mumkin va browserda message ko'rinishida chiqadi

