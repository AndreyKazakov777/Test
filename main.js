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
// Выбор одного элемента DOM по селектору
// document.querySelector('selector');

// document.querySelector('h2');
// document.querySelector('h2').classList.add('red');

// const heading2 = document.querySelector('h2');
// heading2.classList.add('green');


// Выбор коллекции элементов
// const headings = document.querySelectorAll('h2');
// console.log(headings);

// headings.classList.add("red-text"); - не может добавить св-во к каждому элементу, т.к. это не массив, а NodeList 

// Поэтому мы перебираем их с помощью for of
// for (let item of headings) {
//     console.log(item);
//     item.classList.add("red-text");
// }

// const paragraphs = document.querySelectorAll('p');
// for (let par of paragraphs) {
//     par.classList.add("green-text");
// };

// paragraphs.forEach((par) => {
//     par.classList.add("red-text")
// });
// paragraphs.forEach(par);

// Также есть следующие методы
// document.getElementsByClassName(''); выбор по CSS классу
// document.getElementsByTagName(''); выбор по Тегу
// document.getElementById(''); Выбор по ID

// ========== Работа с SCC классами ===============
/*
element.classList.add('')
.add()
.remove()
.toggle()
.contains()
*/

// const heading = document.querySelector('h2');
// console.log(heading);

// heading.classList.add('red-text');
// heading.classList.remove('red-text');

// heading.classList.toggle("red-text");
// heading.classList.toggle("red-text");

// heading.classList.contains('red-text');

// =============Работа с атрибутами=============
/*
getAttribute(attrName) - возвращает значение указанного атрибута
setAttribute(name, value) - добавляет указанные атрибуты и его значение к элементу
hasAttribute(attrName) - возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) - удаляет указанный атрибут
*/

// const img = document.querySelector('#logo');
// const srcValue = img.getAttribute('src');
// console.log(srcValue);

// img.setAttribute('src', './img/php.png');
// img.setAttribute('width', '200');
// img.src = "./img/js.png";

// const button = document.querySelector("#button");
// button.setAttribute('value', "Отправить нах");
// button.value = 'Новый текст для кнопки';
// console.log(button);

// =============== Работа с прослушкой событий ============

// const button = document.querySelector("#button");
// const img = document.querySelector('#logo');
// button.value = "Удалить";
// img.setAttribute('height', '200');

// button.addEventListener("click", function() {
//     // console.log("Click!");
//     img.remove();

// });
// Если только одно действие по элементу, то можно использовать "onclick"
// button.onclick = function () {
//     console.log("Click 1!");


// =============== Работа с прослушкой событий 2 ============

// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener('input', function() {
//     // console.log("Привет, уроды!");
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// });

// =============== Работа с прослушкой событий Event ============

// const list = document.querySelector("#list");

// list.addEventListener("click", function (event) {
//     // console.log(this);
//     console.log(event);
//     console.log(event.target);
// });

// ================ Работа с элементами  ================
/*
Создать элемент
document.createElement('tag-name');

Изменить HTML содержимое внутри элемента
element.innerHTML = " "

Изменить Текстовое содержимое внутри элемента
node.innerText = " "

Клонирование элемента
node.cloneNode() // true  с внутренним содержимым (текст и теги), false - без внутреннего содержимого

Вставить элемент внутрь другого элемента 
element.append()

Удалять элемент через метод
element.remove()
*/

//Выбор контейнера
// const container = document.querySelector('#elementsContainer');

// Создание заголовка
// const newHeader = document.createElement('h1');
// newHeader.innerText = 'Новый заголовок';
// container.append(newHeader);

// //Копирование шапки
// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// // Вставка разметки через строки
// const htmlExample = '<h2>Ещё один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);

// // Вставка разметки через шаблонные строки
// const title = "Текст заголовка2";
// const htmlExample2 = `<h2>${title}</h2>`;
// container.insertAdjacentHTML('beforeend', htmlExample2);

// =============== ToDo список задач ==============

// const todoList = document.querySelector("#todo-list");
// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");

// todoForm.addEventListener("submit", formHandler);

// function formHandler(event) {
//     event.preventDefault();
    
//     // Получаем название задачи из поля ввода(инпут)
// const taskText = todoInput.value;

// /*   
// //Создаём тег li через разметку
// const li = `<li>${taskText}</li>`;

// //Добавляем разметку на страницу
// todoList.insertAdjacentHTML('beforeend', li); 
// */

// // Создаём тег li с помощью создания элемента
// const newTask = document.createElement('li');
// newTask.innerText = taskText;

// // Создаём кнопку удалить
// const deleteBtn = document.createElement('button');
// deleteBtn.setAttribute('role', 'button');
// deleteBtn.innerText = "Удалить";
// deleteBtn.style['margin-left'] = "15px";
// newTask.append(deleteBtn);

// //Добавляем событие по клику
// deleteBtn.addEventListener('click', deleteTask);

// function deleteTask () {
// newTask.remove();
// };

// //Добавляем элемент на страницу
// todoList.append(newTask);

// //Очищаем полу ввода
// todoInput.value = '';

// //Фокус на поле ввода
// todoInput.focus();
// }

// =========== setInterval =================

// const timerIntervalID = setInterval (function() {
//     console.log('Fired!');
// }, 1000);

// clearInterval(timerIntervalID);

// =============== setTimeout ================

// timerId = setTimeout(function(){
//     console.log("setTimeout");
// }, 2000);
// clearInterval(timerId);

// =========== setInterval + setTimeout =============

// const SI = setInterval(function(){
//     console.log('SI');
// }, 1000);

// setTimeout(function(){
//     clearInterval(SI);
// }, 5000);

// ============== Секундомер ==============

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;



// Старт
const  btnStart = document.querySelector("#start");
btnStart.onclick = function () {
   timerID = setInterval(() => {
    counter++;
    // clearInterval(counter);
    counterElement.innerText = counter;
}, 1000); 
}

// Стоп
const btnStop = document.querySelector('#pause');
btnStop.onclick = function() {
    console.log(btnStop);
    clearInterval(timerID);
}; 