7-dars

---Object advanced
---Garbage collection
---Garbage collector
---this method
---Destructure
---Spread operator

--------------------------------------------

Garbage collection

garbage collection => unreachable yetib bo'lmas bolgan malumot yani obj1 = {name: "webbrain"} 
                      berildi ikkinchi  marta obj1 = null berildi birinchi linkni va heapdagi malumotni remove qilib yuboradi

--------------------------------------------

Garbage collector

garbage collector => obj1 ga berigan link keyingi safar ozgarsa garbage collector bolib qoladi

let obj1 = {name: "webbrain"} garbage collector 
obj1 = null new link

--------------------------------------------

this method

this => global window objectiga teng
this === window = true => bular eng katta object hisoblanadi

let user = {
    name: "webbrain",
    sayHi() {
        console.log(this);
        console.log(user);
        console.log(`Hi ${this.name}`);
        console.log(`Hi ${user.name}`);
    }
}

user.sayHi()

bu xolatda this ishlatish tavsiya qilinadi chunki user (parent) o'zgarib qolishi mumkin

let user = {
        name: "webbrain",
        sayHi() {
            console.log(this);
            console.log(user);
            console.log(`Hi ${this.name}`);
            console.log(`Hi ${user.name}`);
        }
    }
    
    user.sayHi()
    
    let usr = user;
    
    user = null;
    
    usr.sayHi()

 bu xolatda this ishlatish kerak chunki user garbage collection bo'ldi

Function bo'lmasidan oldin constructor class ishlatilgan

new target => function chaqirilgan yoki chaqirilmaganini aniqlashtirib beradi

----------------------------------------------

Destructure{}

const employee = {
    id: 1,
    name: "Abbos",
    surname: "Ibrokhimov",
    occupation: "Frontend developer",
    age: 21,
}


console.log(employee.id, employee.name, employee.surname, employee.occupation, employee.age)

const {id, name, surname, occupation, age} = employee   ===> destructure

console.log(id, name, surname, occupation, age)

----------------------------------------------------

Spread operator  ===> clone qilib beradi

const obj = {
  name: "John",
  age: 24,
  status: "developer",
};

const anotherobj = { ...obj };

console.log(anotherobj);
