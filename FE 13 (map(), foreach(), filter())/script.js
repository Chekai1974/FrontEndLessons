// const num1 = 5
// const num2 = 7
// function call(callback) {
//     callback(num1,num2)
// }


// call(function (a,b) {
//     console.log(a+b);
// })


// setTimeout
// 1 sec = 1000 ms
// setTimeout(() => {
//     console.log("Hello World!");
// }, 5000)

// ----1---- (setTimeout)
// const p = document.getElementById('p')
// const btn = document.getElementById('btn')

// btn.onclick = () => {
//     p.style.display = "block"
// }

//forEach
//                      firtst    second   third
//callback arguments => element,  index,   array

// ----1---- (forEach)
// const numbers = [1,4,6,8,5]
// numbers.forEach((firtst,second,third) => {
//     console.log(firtst**2);
// })


// -------- (forEach)
// const strs = ["Hi","my","name","is","Marko"]
// strs.forEach((str) => {
//     console.log(str);
// })


// -------- (forEach)
// const strs2 = ["Hi","my","name","is","Marko"]
// strs2.forEach((str2, index) => {
//     console.log(`(${index+1})`,str2);
// })


// -------- (forEach)
// const strs3 = ["Hi","my","name","is","Marko"]
// strs3.forEach((str3, index) => {
//     if (index%2==0) {
//         console.log(`(${index+1})`,str3);
//     }
// })

//map
//                      firtst    second   third
// callback arguments => element,  index,   array
// создает новый масив на основе первого 

//-----2----- (map)
const numbers = [1, 2, 3, 4, 5]
let newNumbers = numbers.map((num) => {
    return num**2
})
console.log(numbers);
console.log(newNumbers);
console.log("_______________");

// ----------(map)
const numbers2 = [1, -2, 3, -4, 5]
let newNumbers2 = numbers2.map((num2) => num2<0 ? num2 * -1 : num2)
console.log(numbers2);
console.log(newNumbers2);
console.log("_______________");


// ---------(map)
const numbers3 = ["1", "2", "3", "4", "5"]
let newNumbers3 = numbers3.map((num3) => isNaN(num3) ? num3 : +num3)
console.log(numbers3);
console.log(newNumbers3);
console.log("_______________");

//----------(map)
const arr = [{ name: "John", age: 25 }, { name: "Jane", age: 30 }, { name: "Sophie", age: 15 }];
const newArr = arr.map((elem) => elem.name)
console.log(newArr);
console.log("_______________");

//--------(map)
const arr2 = [4,16,81,121]
let newArr2 = arr2.map((el) => Math.sqrt(el))
console.log(newArr2);
console.log("_______________");


// filter
// num % 2 === 0 => true/false

// -----1-----
const nums = [2, 3, -6, -7, 4, -8]
let newNums = nums.filter((element) => {
    return element % 2 ===0 && element > 0
})
console.log(newNums);
console.log("_______________");


const names = [ {name: "Roza", age: 40}, {name: "Rasul", age: 30}, {name: "John", age: 25},{name: "Lyudmila", age: 60}];
let longNames = names.filter((nam) => nam.name.length > 4).map((elem)=> elem.name);
console.log(longNames);