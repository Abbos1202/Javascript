3 - dars 

---If else
---Ternary ? :
---Nullish ??

-------------------------------------

if else ===> if agar / else ...masa

if else => bunda agar code bir qatorga sig'sa {} bilan yozmasa bo'ladi
yani =>
if (temp < 0) console.log("Havo juda sovuq");
else if (temp < 25 && temp > 15) console.log("Havo juda issiq");
else if (temp < 15 && temp > 10) console.log("Havo issiq");
else if (temp < 10 && temp > 0) console.log("Havo sovuq");
else console.log("Not found");

-------------------------------------

Ternary ? : ===> ? agar, : ...masa

Ternary ? : => ES 6 da chiqqan if else ni o'rnida ishlatsak bo'ladi

-------------------------------------

Nullish ??  ===> or || bilan bir xil ishlidi

Nullish => null undefined  bo'lsa keyingi berilgan qiymat chiqadi, bo'lmasam hammasini to'g'ri deb hisoblaydi.

console.log(false || 1); 1
console.log(false ?? 1); false

console.log(NaN || 1); 1
console.log(NaN ?? 1); NaN

console.log(null || 1); 1
console.log(null ?? 1); 1

console.log(undefined || 1); 1
console.log(undefined ?? 1); 1