4 - dars

---Switch case
---For loop
---Infinite loops
---var bilan let farqi
---Nested loops
---label of inner loops

---------------------------------

Switch case  ===>  tanlash operatori

switch (key) {
   case value: code
      break;

   default: code
      break;
}

switch => key beriladi va undagi qiymatni tekshirish uchun case dan foydalaniladi.
case => value yani qiymat beriladi va true bo'lsa : dan keyingi code chiqadi
default => else bilan bir xil

break => asosan for loop va switch case da ishlatilinadi va case dagi code true ga teng bo'lsa o'sha
         yerda to'xtaydi.
continue => asosan for loop va switch case da ishlatilinadi va case dagi code true ga teng bo'lsa  
            o'sha yerni skip qilib ketadi.

---------------------------------

for loop 3 ta qiymat oladi:
   1- boshlangich qiymat
   2- Shart
   3- qiymatni yangilanishi

---------------------------------

Infinite loops => for loop da ikkinchi manzilidan doimo true qaytsa davomiy bo'lib qoladi

for(let i = 1; i < 12; ) {
   console.log(i)
}

---------------------------------

let/const => block scope xosil qiladi, va ular faqat usha uzini blockida mavjud tashqaridan chaqira olmaymiz
var => global scope

---------------------------------

Nested loops

let i = 1;

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
  console.log("====================")
}

---------------------------------

label of inner loops

outer: for (i = 1; i <= 10; i+=3) {
   inner: for(j = 1; j <= 10; j+=3 ){
      console.log(j, "j");
   }
   console.log(i, "i");
}
