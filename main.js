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

const checkRooms = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Проверяем номера в отеле...");
        const availableRooms = true;
        console.log(availableRooms);

        if (availableRooms) {
            resolve("Номера есть!");
        } else {
            reject ("Номеров нет.");
        }


    }, 1000)
});

checkRooms.then(function(data){
    return new Promise(function(resolve, reject){
        setTimeout(function (){
            console.log("----then 1----");
            console.log("Ответ на предыдущем шаге:", data);
            console.log("Проверяем авиабилеты...");
            const availableTickets = true;

            if (availableTickets) {
                let message = "Билеты есть";
                resolve(message);
            } else {
                let message = "Билетов нет";
                reject(message)
            }

        }, 2000)
    }); 
}).then(function(data){
    console.log("----then 2----");
    console.log("Ответ на предыдущем шаге:", data);
    console.log("Едем в отпуск!");
}).catch(function(data){
    console.log("----catch----");
    console.log("Ответ на предыдущем шаге:", data);
    console.log("Отпуск отменяется :(");
})




// checkRooms.then(function(data){
//     console.log("----then 1----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Едем в отпуск! :)");
// }).catch(function(data){
//     console.log("----catch----");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Отпуск отменяется :(");
// })