// 1) JS Engine
// 2) JS Runtime Envitonment.
// 3) Стек вызовов
// 4) Паралельность и цикл событий

// Ситевые Запросы
// get     получить
// post    отправить
// put     изменить
// delete  удалить


// XHR  and API Fetch


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


    fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

        var xhr = new XMLHttpRequest();
        console.log('UNSENT', xhr.readyState); // readyState будет равно 0


        xhr.open('GET', '/api', true);
        console.log('OPENED', xhr.readyState); // readyState будет равно 1


        xhr.onprogress = function () {
        console.log('LOADING', xhr.readyState); // readyState будет равно 3
        };


        xhr.onload = function () {
        console.log('DONE', xhr.readyState); // readyState будет равно 4
        };


xhr.send(null);
        
// ---
const requestURL1 = 'https://jsonplaceholder.typicode.com/users';
let data = {};
data.firstname = "John";
data.lastname  = "Snow";
let json = JSON.stringify(data);


let xhr = new XMLHttpRequest();
xhr.open("POST", requestURL1, true);


xhr.setRequestHeader('Content-type','application/json; charset=utf-8');


xhr.onload = function () {
 let _data = JSON.parse(xhr.responseText);
 if (xhr.readyState == 4 && xhr.status == "200") {
   console.log("Сервер вернул нам: ", _data);
 } else {
   console.error("error");
 }
}
xhr.send(json);


// Синтакс Promise:
new Promise(executor);
new Promise(function (resolve, reject) { });
// ---
// ожидание (pending): начальное состояние, не исполнен и не отклонён. ожидания
// исполнено (fulfilled): операция завершена успешно.
// отклонено (rejected): операция завершена с ошибкой.


// Пример fetch
fetch("http://65.109.13.139:9191/signin", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"username\":\"admin\",\"password\":\"admin\"}",
});

// Test
const requestURL = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body) {
 const headers = {
   'Content-Type': 'application/json'
 }


 return fetch(url, {
   method: method,
   headers: headers
 }).then(response => {
   if (response.ok) {
     return response.json()
   }


   return response.json().then(error => {
     const e = new Error('Что-то пошло не так')
     e.data = error
     throw e
   })
 })
}


sendRequest('GET', requestURL)
 .then(data => console.log(data))
 .catch(err => console.log(err))