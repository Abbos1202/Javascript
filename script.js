// While vs do while

// let i = 3;

// while(i){
//     console.log(i);
//     i--
// }

// do{
//     console.log(i);
//     i--
// }while(i)

// ======================================
// ======================================

// Function declaration

// function getAvr() {
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("Hi Webbbrain");
//     console.log("========================");
// }

// getName()

// function getName(){
//     console.log("Abdulloh");
// }

// getName()

// =======================
// =======================

// Function expression 

// const getAvr = function(){
//     console.log("Abdulloh, Welcome to Webbrain");
// }

// getAvr()

// Parametr => 

// const getAvr = function(name){ => name => parametr
//     console.log(`${name}, Welcome to Webbrain`);
// }

// getAvr("Abbosbek")  => argument
// getAvr("Firdavs")
// getAvr("Azizbek")
// getAvr("Sirojiddin")
// getAvr("Murodjon")

// const getAvr = function(name, surname, age){ 
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
//     console.log("=======================");
// }

// getAvr("Abbosbek", "Ibrohimov", 21)
// getAvr("Firdavs", "Nazarov", 24)
// getAvr("Azizbek", "Juraev", 28)
// getAvr("Sirojiddin", "Tangirov",30)
// getAvr("Sardorbek", "Tursunboyev", 25)

// Shadow variable => 

// let name = "Webbrain";

// Arrow function =>

// const test = ()=> {
//    let name = "Academy";
//    console.log(name);
// }
// console.log(name);
// test()


// Default parametr => 

// const telegram = (name, surname) => {
//     // if(surname) console.log(name, surname);
//     // else console.log(name);

//     // ? :
//     // surname ? console.log(name, surname) : console.log(name);

//     // ||
//     console.log(name, surname || "");
// }

// telegram("Webbrain");

// function with return

// // const gpa = "() => {}";
// const gpa = () => {
//     return "okay?"
// };

// // console.log(gpa);
// console.log(gpa());

// const calcGpa = (a = 0, b = 0, c = 0, d = 0) => {
//     let res = (a + b + c + d) / 4
//     // console.log(res);
//     return res
//     // return "okay!"
// }
// console.log(calcGpa(5, 3, 3, 2));


// const getNum = (a) => {
//     // console.log(a);
//     let total = 193;
//     console.log((a * 100) / total);
//     return (a * 100) / total;
// }

// console.log(parseInt(getNum(159)));