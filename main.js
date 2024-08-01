// let greeting;
// let time = 10;

// if (time < 12) {
//     greeting = "Good morning"
// } else {
//     greeting  = "Good day"
// }
// console.log(greeting);

// let time = 20;
// let greeting = time < 12 ? "Good morning" : "Good day";
// console.log(greeting);

// function sayHi () {
//     console.log("Hello!")
// }
// sayHi();

// const say = function() {
//     console.log("Bye")
// }
// say();

// const userName = 'Mark';
// console.log(`Hello, ${userName}! How are you?`);

// function sayHi(name) {
//     console.log(`Hello, ${name}! How are you?`);
// }
// sayHi("Tom");
// sayHi("To");
// sayHi("T");

// Функция как аргумент
// function sum (a, b) {
//     return a + b;
// }

// function diff (c, d) {
//     return c - d;
// }

// function doSmth(func) {
//     let result = func(10, 15);
//     console.log(result);
// }
// doSmth(sum);
// doSmth(diff);

// 6.4 Самовызывающаяся функция IIFE
// (function () {
//     console.log("Пошёл на хер, кАзёл!")
// })();

//  let res = (function (a, b) {
//     return a + b;
   
// })(1, 2); 

// console.log(res); 

// 6.5 Стрелочные функции
// function sayHi(name) {
//     console.log(`"Привет, ${name}!"`)
// }
// sayHi('уроды');

// const sayHi2 = (name) => {
//     console.log(`"Привет, ${name}!"`)
// };
// sayHi2('чушня');

// const sayHi2 = (name) => console.log(`"Привет, ${name}!"`);
// sayHi2('чушня');

//--------------- Promise-----------------

// const checkRooms = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         console.log("Проверяем номера в отеле...");
//         const availableRooms = true;
//         console.log(availableRooms);

//         if (availableRooms) {
//             resolve("Номера есть!");
//         } else {
//             reject ("Номеров нет.");
//         }


//     }, 1000)
// });

// checkRooms.then(function(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(function (){
//             console.log("----then 1----");
//             console.log("Ответ на предыдущем шаге:", data);
//             console.log("Проверяем авиабилеты...");
//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = "Билеты есть";
//                 resolve(message);
//             } else {
//                 let message = "Билетов нет";
//                 reject(message)
//             }

//         }, 2000)
//     }); 
// }).then(function(data){
//     console.log("----then 2----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Едем в отпуск!");
// }).catch(function(data){
//     console.log("----catch----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Отпуск отменяется :(");
// })




// checkRooms.then(function(data){
//     console.log("----then 1----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Едем в отпуск! :)");
// }).catch(function(data){
//     console.log("----catch----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Отпуск отменяется :(");
// })

// const summ = (a, b) => a + b;
// const res = summ(10, 20);
// console.log(summ(10, 30));
// console.log(res);

// -----------------Массивы------------------
// const autoBrans = ["Audi", "BMW", "Mazda", "Toyota"];
// // // console.log(autoBrans[1]);
// // // console.log(autoBrans[0, 1, 2]);
// // // console.log(autoBrans.length);
// // autoBrans.push("Mercedes");
// // // autoBrans.pop();
// // // autoBrans.shift();
// // autoBrans.unshift("Porshe");
// autoBrans.splice(3, 1, "Volvo");

// console.log(autoBrans);

// ---------------- 8. Циклы  -----------------

// for (let i = 50; i <= 60; i = i + 2) {
//     console.log(i + 10);
// }

// ----------------- 9. Обход массива циклом For -------------

// const autoBrands = ["Audi", "BMW", "Mercedes", "Mazda", "Toyota"];

// for (i = 0; i < autoBrands.length; i++) {
//     console.log(i);
//     console.log(autoBrands[i]);
// }

// ----------------- 10. Обход массива циклом for (of) ----------------

// const autoBrands = ["Audi", "BMW", "Mazda", "Toyota"];

// for (let cars of autoBrands) {
//     console.log(cars);
// }


// -------------------- 11. Обход массива методом forEach() ----------------------

// const autoBrands = ["Audi", "BMW", "Mazda", "Toyota"];

// autoBrands.forEach(function (item, index,  array) {
//     console.log(`${index}) ${item} - ${array}`);
// })

// autoBrands.forEach(printBrand);

// function printBrand (brand, index) {
//     console.log(brand, index);
// }

// ----------------- 12. Объекты ----------------

// const person = {
//     userName: "Mark",
//     age: 30,
//     isMarried: false,
//     // profession: "Designer"
// }
// console.log(person);
// console.log(person.userName);
// console.log(person["age"]);

// // let propertyName = "profession";
// // console.log(person[propertyName]);

// person.professionn = "JS devoloper";
// console.log(person);

// delete person.age;
// console.log(person);

// ---------------- 13. Методы в объектах ---------------

// const person = {
//     userName: "Mark",
//     age: 30,
//     isMarried: false,
//     // sayHi: function () {
//     //     console.log("Привет!");
//     // }
// }
// // person.sayHi();
// console.log(person);


// person.sayHi = function() {
//     console.log("Hello!")
// }

// console.log(person);
// person.sayHi();

// --------------------- 14. Ключевое слово this ----------------

// const person = {
//     userName: "Mark",
//     age: 30,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}!`);
//     }
// }
// person.sayHi("Юрий");

// ---------------- 15. Объекты обход циклом for in (не путать с for of) -----

// const person = {
//     userName: "Mark",
//     age: 30,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}!`);
//     },
// };

// for (let key in person) {
//     // console.log(key);
//     console.log(key, ':', person[key]);

// }

// --------------- 17. Классы. Конструкторы объектов -------------
// Представим ситуацию, когда нам надо описать несколько одинаковых объектов

// const person1 = {
//     userName: "Mark",
//     age: 30,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}!`);
//     },
// };

// const person2 = {
//     userName: "Pavel",
//     age: 28,
//     isMarried: true,
//     sayHi: function () {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
//     },
// };

// class Person {
//     constructor (userName, age, isMarried) {
//         this.userName = userName;
//         this.age = age;
//         this.isMarried = isMarried;
//     }
//     sayHi(name) {
//         console.log(`Привет, ${name}! Меня зовут ${this.userName}!`);
//     }
// };

// const person1 = new Person('Mark', 30, false);
// const person2 = new Person ('Pavel', 28, true);
// // console.log(person1);
// console.log(person2);

// person1.sayHi("Bob");


// ---------- Выбор DOM элементов ----------------

document.querySelector('h2');