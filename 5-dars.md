5 - dars

While
do while
Function declaration
Function expression
Arrow function
Shadowed variables
Default parametr
Functions with return

-----------------------------------------

while => whileda agar shart truega teng bo'lsa infinite bo'lib qoladi va console.log tagidan i-- 
            qo'yish kerak yoki i++

For example =>

let i = 3;

while(i){
    console.log(i);
    i--
}

-----------------------------------------

while => agar biz null, undefined, 0 yoki false qo'ysak terminalda javob chiqmidi

-----------------------------------------

function =>

function declaration => hoisting bo'ladi va qiymat to'liq chiqadi

function expression => hoisting bo'lmaydi va error beradi, oddiy variablega teng bo'ladi.Shuning uchun hoisting bo'lmaydi

arrow function => ES 6 da chiqqan, hoisting bulmaydi, qachonki gulli qavs bolmasa auto return xususiyati mavjud, this mavjud emas

-----------------------------------------

Hoisting nima ? => hoisting funksiyani yoki variable ni yuqoriga olib chiqib declare qilish

-----------------------------------------

parametr => function yozilganda beriladi
argument => function chaqirilganda beriladi

-----------------------------------------

const getAvr = function(name){ => name => parametr
    console.log(${name}, Welcome to Webbrain);
}

getAvr("Abbosbek")  => argument
getAvr("Firdavs")

-----------------------------------------

Shadowed variables => the same name variable

-----------------------------------------

loops

initial Expression => boshlangich qiymat
condition => shart beriladi
update expression => initial Expression ni qiynati uzgarib boradi, qachonki condition true ga teng bulsa

-----------------------------------------

let => block scoped => uzgaruvchi faqat uzini scope da mavjud, tashqaridan chaqira olmaymiz
var => global scoped => uzgaruvchi globally mavjud, tawqaridan kira olamiz

-----------------------------------------

log(i) => xar doim son chiqadi
log(str[i]) => str ni qiymatlari chiqadi

-----------------------------------------

i++ === i += 1
i+2 === i += 2

-----------------------------------------

break => malum bir shart berilsa, va shart true ga teng bulsa, programmani butunlay tuxtatadi
continue => malum bir shart berilsa, va shart true ga teng bulsa, usha aylanishni ni utkazib yuboradi

-----------------------------------------

while => uzgaruvchi tawqarida elon qilinadi, i++ esa ichkarida. while() shartni oladi
do while => uzgaruvchi tawqarida elon qilinadi, i++ esa ichkarida., falsy condition bulsa xam programma
               bir marta yurib ketadi, chunki birinchi natijani chiqaradi keyin condition tekshiradi

-----------------------------------------

Number
Number.isInteger => son butun yoki butun emasligin tekshirib boolean qiymat qaytaradi
Number.parseInt => faqat butun son qaytaradi, va type ni number qilib qaytaradi
son.toFixed(2) => sonni yaxlitlab beradi, va data type string buladi, biz + iwlatishimiz mumkin num 
                     ga utkazish uchun
