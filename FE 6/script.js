// ----1-----
// Достать из HTML сам ul
// const ul = document.querySelector('#test')

// // Создания li
// const li = document.createElement('li')
// const li2 = document.createElement('li')

// // Добавил текст в li
// li.innerText = 'Text 1'
// li2.innerText = 'Test 2'

// // как добавить в ul елемент li
// ul.append(li, li2)
// ul.appendChild(li)




// // ----2----
// const div = document.createElement('div')
// const body = document.querySelector('body')
// const h1 = document.createElement('h1')
// const p = document.createElement('p')

// h1.innerText = 'Slyvka Marko Viktorovich'
// p.innerText = 'Делай то, что любишь. Учись всё время. Не сравнивай себя с опытными программистами или «гениями кода»Изучай теории и концепцииОбращайся за помощью к опытным программистамПостоянно практикуйся'
// // div.append(h1, p)
// body.append(h1,p)



// ----3----
// Как получить силку на что-то
// const article = prompt('link to article')
// const img = prompt('link to img')

// // Создать елемент
// const a = document.createElement('a')
// const imges = document.createElement('img')

// // Добавить в елемент атрибут и его свойсто ('href', article )
// a.setAttribute('href', article )
// imges.setAttribute('src', img)

// // Доваил текс в котором будет заложена сылка
// a.innerText = "link to your article"

// // Добавить в body дава этик Tag
// body.append(imges, a)




// // ------4------
// // Как получить силку на что-то
// const article = prompt('link to article')
// const img = prompt('link to img')

// // // Создать елемент
// const a = document.createElement('a')
// const imges = document.createElement('img')

// // Добавил к сылке атрибют со значениям
// a.setAttribute('href', article)
// imges.setAttribute('src', img)

// // добавил в сылку фотку
// a.append(imges)

// // Открил в боди сылку в которой уже фотка
// document.body.append(a)


// // ----5----
// const links = [
//     {
//       title: "Google",
//       link: "https://google.com/",
//     },
//     {
//       title: "Yahoo!",
//       link: "https://yahoo.com/",
//     },
//     {
//       title: "Baidu",
//       link: "https://baidu.com/",
//     },
//     {
//       title: "Yandex(dzen)",
//       link: "https://dzen.ru/",
//     },
//     {
//       title: "Bing",
//       link: "https://bing.com/",
//     },
// ];

// // Создал div
// const root = document.createElement('div')

// for (let i = 0; i < links.length; i++) {
//     // Создал елемент
//     let newA = document.createElement('a')
//     // Добавил Attribute 'href' со значениям массива links обекта с ключем link
//     newA.setAttribute('href', links[i].link)
//     // Добавил текс в сылку со значениям массива links обекта с ключем title
//     newA.innerText = links[i].title
    
//     // Создал елемент br который переводит строки
//     const br = document.createElement('br')

//     // Добавил в div (root) все эти сылки
//     root.append(newA, br)
// }
// // Добавил div(root) в body
// document.body.append(root)



// ----6----
// Есть массив с обьектами. Нужно создать список с значениями всех обектов
const cars = [
    {
      title: "BMW",
      price: "40000",
      count: "15",
    },
    {
      title: "Toyota",
      price: "25000",
      count: "13",
    },
    {
      title: "Ford",
      price: "15000",
      count: "26",
    },
    {
      title: "Chevrolet",
      price: "50000",
      count: "60",
    },
    {
      title: "Mercedes",
      price: "12000",
      count: "20",
    },
];
  
for (let i = 0; i < cars.length; i++) {

    let cartList = document.createElement('ol')


    let title = document.createElement('li')
    title.innerText = cars[i].title

    let price = document.createElement('li')
    price.innerText = cars[i].price

    let count = document.createElement('li')
    count.innerText = cars[i].count

    cartList.append(title, price, count)
    document.body.append(cartList)
}




// ----7----

const dogs = [
    {
      breed: "beagle",
      age: 4,
    },

    {
      breed: "labrador",
      age: 6,
    },

    {
      breed: "yorkie",
      age: 2,
    },
];

for (let i = 0; i < dogs.length; i++) {
    
    let str = document.createElement('p')

    // let aboutDogs = dogs[i].breed + "'s" + " " + " age is " + dogs[i].age
    let aboutDogs = `${dogs[i].breed +"'s"} age is ${dogs[i].age}`
    str.innerText = aboutDogs

    document.body.append(str)
}
  
