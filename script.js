// let account = "webbrin";

// console.log(account);

// let newObj1 = {};
// let newObj2 = new Object();

// console.log(newObj1, newObj2);

// let account = {
//     name: "webbrain",
//     major: "Front-End",
//     founded: 2020,
//     "full name": "webbrain IT academy",
//     0: 12345,
// }


// let name = "major"

// console.log(account.name); // webbrain
// console.log(account[name]); // Front-End


// let key = "major";

// console.log(account[key]);
// console.log(account.major);
// console.log(account["major"]);

// console.log(account[0]);
// console.log("full name");
// console.log(account["name"]);
// console.log(account.surname); // undefined


// let account = {
//     name: "webbrain",
//     major: "Front-End",
//     name: "webbrain IT academy" // eng oxiridagi name chiqadi
// }

// // Object.freeze(account)
// Object.seal(account)

// delete account.major

// account.name = "Webbrain IT academy" // name ni qiymati yangilanadi

// account.founded = 2022 // founded 2022 yonidan qo'shilib qoladi

// console.log(account);


// =====================================================================

// reference

// const account1 = {
//     name: "Webbrain",
//     major: "Frontend"
// }

// const account2 = {
//     name: "Webbrain",
//     major: "Frontend"
// }

// console.log(account1 === account2); // false


// =================================================================

// structuredClone

// const account1 = {
//     name: "Webbrain",
//     major: "Frontend"
// }

// const account2 = structuredClone(account1)
// account1.name = "webbrain academy"

// console.log(account2);


// ================================================================


// let name = "Webbrain";
// let major = "Frontend";

// // const account2 = {
// //     name: name,
// //     major: major,
// // }

// const account = {
//     name,
//     major,
// }

// console.log(account);

// =================================================================

// key bor yoki yo'qligi

// const account = {
//     name: "webbrain",
//     major: 'front-end',
// }

// console.log("name" in account); // true => chunki account da name degan key bor

// =================================================================

// Object.assign()

// const account1 = {
//     name: "webbrain",
//     major: 'front-end',
// }

// const account2 = {};

// account1.name = "test";

// Object.assign(account2, account1);


const account = {
    name: "webbrain",
    major: 'front-end',
    founded: 2020,
    students: 10000,
    mentors: 5,
}

for(let i in account){
    console.log(i);
}