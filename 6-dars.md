6-dars 

---Objects
---Dynamic access to keys
---Copying vs Referencing
---Object assign
---StructuredClone()


object => key va value dan tashkil topgan {name: "Abbos"} name-->key "Abbos"-->value hisoblanadi

Bo'sh object yasash turlari => 
let obj = new Object()
let newObj = {} => constructor


console.log(account["name"]); => dynamic  access

---------------------------------------------

freeze vs seal

freeze => malumotni qo'shib, update qilib, o'chirib bo'lmaydi 
seal => malumotni qo'shib, o'chirib bo'lmaydi, lekin update qilsa bo'ladi

---------------------------------------------

reference

const account1 = {
    name: "Webbrain",
    major: "Frontend"
}

const account2 = {
    name: "Webbrain",
    major: "Frontend"
}

console.log(account1 == account2); // false
console.log(account1 === account2); // false

manzil alohida lekin qiymat bir xil shuning uchun false chiqayapti

---------------------------------------------

structuredClone() => copy sini yasab beradi

---------------------------------------------

Object.assign(act2, act1) => malumot biriktirish yani act2 ga act1 ni ma'lumotlarini biriktirish


Object methods

console.log(Object.keys(mashina)); =>  Objectni key larini arrayga solib qaytaradi
console.log(Object.values(mashina)); => Objectni value larini arrayga solib qaytardi
console.log(Object.entries(mashina)); => Objectning Xar bir  key value larini alohida arrayga solib qaytaradi
console.log(Object.entries(mashina)); => Arraydan object qaytardi

----------------------------------------------

FREEZE

delete mashina.name; X after freeze, malumot ni uchirish
mashina.name = 'Gentra'; X after freeze, malumotni yangilash
mashina.color = 'black'; X after freeze, yangi malumot qushish

----------------------------------------------

SEAL

delete mashina.name; X after seal, uchirib bulmaydi
mashina.name = 'Gentra'; Valueni update qilsa buladi
mashina.color = 'Qora'; X after seal, yangi malumot qushib bulmaydi

----------------------------------------------

Dynamic access

let ism = 'name';
console.log(mashina.name); => oddiy access
console.log(mashina['name']); oddiy access, juft-boginli key va numeric keylarda
console.log(mashina[ism]); => dynamic access

----------------------------------------------

mashina.engine = 2;   update
mashina.color = 'Qora';  create
delete mashina.name;  o'chirish

-----------------------------------------------

Object assign

const anotherObj = Object.assign({}, obj); => shallow clone olib beradi(nested bulmagan)

const anotherObj = {...obj, status:'Engineer'} => shallow clone olib beradi

const anotherObj = structuredClone(obj); => deep clone olib beradi(nested)

-----------------------------------------------

Copying and Referencing

primitive => copied by value
non-primitive => copied by reference