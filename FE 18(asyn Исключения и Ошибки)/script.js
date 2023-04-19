// try catch

// try
// catch
// try {
//     const elem = document.querySelector('#adas')
//     console.log(elem.textContent);
// } catch (e){
//     console.log("Такго елемента нету");
// }

// Array.from
// итерируемые елементы = object, array, string

// function crateArry(element) {
//     try {
//         return Array.from(element)
//     } catch {
//         return []
//     }
// }

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(crateArry(obj));

// -------1------
// Создать функцию, которая в качестве аргумента получает селектор и
// возвращает содержащийся в этом элементе текст.Если такого элемента нет,
// то функция должна возвращать null.

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         return p.innerText;
//     } catch {
//         return null;
//     }
// }
// console.log(getText('#id'));

// -------2------
// Создать функцию, save_call. Данная функция должна получать функцию в
// качестве аргумента и вызывать ее, если ее нет, то выводить сообщение в консоль “Такой функиции нет”
// const num = 1
// function save_call(func) {
//     try {
//         if (typeof func === "function") {
//             return func()
//         } else {
//             throw new Error("Такой функиции нет")
//         }
//     } catch (Error){
//         return console.error(Error);
//     }
// }
// save_call(num)
// function log() {
//     console.log("Second Func");
// }


// -------1(2)------
// Изменяем функцию, созданную в первом задании и дорабатываем ее.
// При возникновении ошибки функция должна вызвать исключение с
// текстом “Элемента с селектором < указанный селектор > нет в документе”.

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         if (p) {
//             return p.innerText;
//         } else {
//             throw new Error(`Элемента с селектором <${selector}> нет в документе`)
//         }

//     } catch (Error) {
//         return console.error(Error);
//     }
// }
// console.log(getText('#id'));

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         if (p) {
//             return p.innerText;
//         } else {
//             throw new Error(`Элемента с селектором "${selector}" нет в документе `)
//         }

//     } catch (Error) {
//         console.error(Error);
//     }
// }
// console.log(getText('.text'));
// console.log(getText('div'));

// Написать функцию, который запрашивает пост с несуществующим id и
// проверяет код ответа.В случае кода ошибки пользователя вывести сообщение
// об отсутствии такого поста.

// async function getPost(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             if (response.status !== 200) {
//             throw new Error("Такого поста нет")
//         } else {
//             const post = await response.json()
//             console.log(post);
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }
// getPost(10)

// Создать функцию custom_fetch. Данная функция получает ссылку 
// и callback функцию.Если по указанной ссылке получилось отправить 
// запрос и ответ с кодом 200, то необходимо вызвать переданную функцию 
// и в качестве аргумента передать ответ сервера.
async function custom_fetch(url, callback) {
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error("Request failed with status " + response.status)
        } else {
            const obj = await response.json()
            callback(obj)
        }
    } catch (e) {
        console.log(e);
    }
}

custom_fetch("https://jsonplaceholder.typicode.com/posts/10000", response => {
    console.log(response)
})
// function callbackMain() {
    
// }