
// function declaration
function sayHello1() {
    console.log("Hello 1");
}
sayHello1()


// function expression
const sayHello2 = function () {
    console.log("Hi 2");
}
sayHello2()


// arrow function
const sayHallo3 = () => console.log("Hello 3");
sayHallo3()


// return
const sayHallo4 = () => "Hello 4"
console.log(sayHallo4());

const square = (number) => {
    let result = number ** 2
    return result
}
console.log(square(2));

// callback function (function в function(как значения))
const func1 = function () {
    console.log("This is first function");
}
    
const mainFunction = function (callBackFunction) {
    console.log("Start");
    callBackFunction()
}
mainFunction(func1)


// -----1-----
//                              [1,2,3,5]  sumOfArray
const workWithArray = function (array,     callback) {
    return callback(array)
}

//        callback      [1,2,3,5]
function sumOfArray(       arr    ) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i]
    }
    return sum
}

//        callback      [1,2,3,5]
function arrayWithOdd(     arr      ) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !==0) {
            result.push(arr[i])
        }
    }
    return result
}

console.log( workWithArray ( [1, 2, 3, 5], sumOfArray ) );
console.log(workWithArray([1, 2, 3, 5], arrayWithOdd));


// Обработчик События  Event Listener

// 1) onclick
// const btn = document.querySelector('button')
// btn.onclick = function () {
//     alert('Hallo')
// }

// При клике на кнопку число в параграфе увеличивается на единицу.
// const btn1 = document.getElementById('1')
// const btn2 = document.getElementById('2')
// const number = document.querySelector('p')

// let numOfp = +number.textContent
// btn1.onclick = () => {
//     numOfp++
//     number.innerText=numOfp
// }

// btn2.onclick = () => {
//     numOfp--
//     number.innerText=numOfp
// }

// EventListener
const p = document.querySelector('p')
let pContent = p.textContent
addEventListener("keydown", (e) => {
    pContent = e.key
    p.innerText=pContent
})


// ----2----
// const array = [
//     "This is some text",
//     "You can use event listener",
//     "Never give up",
//     "Future frontend developers",
// ];
// for (let i = 0; i < array.length; i++) {
//     let p = document.createElement('p')
//     p.innerText = array[i]
//     p.onclick = () => { 
//         p.innerText = ""
//         for (let j = 0; j < array[i].length; j++) {
//             p.innerText += "*"
            
//         }
//     }
 
//     document.body.append(p)
// }
