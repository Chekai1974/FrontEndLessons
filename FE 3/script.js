
// object
// const person = {
//     nam: "Joe",
//     lastNam: "Lennon",
//     age: 40,
// };

// const product = {
//     name: "Book",
//     price: 250,
// }

//bracket notation
// console.log(product['name']);
// console.log(product['price']);


//date notation
// console.log(product.name);
// console.log(product.price);

// // ---
// const products = [
//     {
//         title: "Nike",
//         price: 300,
//         type: "shoe"
//     },
//     {
//         title: "Puma",
//         price: 450,
//         type: "shoe"
//     },
//     {
//         title: "Channel",
//         price: 1200,
//         type: 'bag'
//     },
//     {
//         title: "BMW",
//         price: 700,
//         type: "car"
//     },
// ];

// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i].title);

//     //Интерполяция
//     console.log(`Title is ${products[i].title}, price is ${products[i].price}, products type is ${products[i].type}`);
//     //Конкатенация
//     console.log("Title is " + products[i].title + ", price is " + products[i].price + ", products type is " + products[i].type);
// }
// let sum = 0;
// for (let i = 0; i < products.length; i++) {
//     sum += products[i].price;
    
// } console.log(sum);

// for (let i = 0; i < products.length; i++) {
//     if (products[i].type==="shoe") {
//         console.log(products[i].title);
//     }
// }
// for (let i = 0; i < products.length; i++) {
//     products[i].type === "shoe" ? console.log(products[i].title) : false
// }


// ======= ========= ========

// const product ={
    
//         title: "Nike",
//         price: 300,
//         type: "shoe"
// }
// // let { title } = product;
// // let { price } = product;

// let { title, price } = product;
// console.log(title);
// console.log(price);

// const products = [
//     {
//         title: "Nike",
//         price: 300,
//         type: "shoe"
//     },
//     {
//         title: "Puma",
//         price: 450,
//         type: "shoe"
//     },
//     {
//         title: "Channel",
//         price: 1200,
//         type: 'bag'
//     },
//     {
//         title: "BMW",
//         price: 7000,
//         type: "car"
//     },
// ];

// for (let i = 0; i < products.length; i++) {
//     let { title, price } = products[i];
//     console.log(`${title}, ${price - ((price * 5) / 100)}`);
// }

// let res = [];
// for (let i = 0; i < products.length; i++) {
//     let { title, price, type } = products[i];
//     if (price < 1000) res.push(products[i]);
// }
// console.log(res);

// ====== ======= ======

// 1) funtion declaration
// 2) funtion expression
// 3) arraw funtion

             //parametr
// function number(num) {
//     console.log(num ** 4);
// }
// // argument
// number(2)
// number(4)


// let value = prompt("Value: ")
// function res() {
//     if (value % 2 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("no");
//     }
// }
// res(value)

// function number(num) {
//     num ** 4
// }
// number(2)

// function number2(num) {
//     return num ** 4;
// }

// let number3 = number(2)
// console.log(number3 + 4);

// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log("yes");
//     } else {
//         console.log("No");
//     }
// }


//------
// function power(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base
//     }
//     return result;
// }
// console.log(power(2, 4)); 
// console.log(power(4, 5)); 


// function task(first, second) {
//     first > second ? console.log(first) : console.log(second);
// }
// task(55.62, 55)


function task2(num) {
    let arr = []
    for (let i = 0; i <=num; i++) {
        arr.push(i)
        
    }
    
}

let sum = task2(5)
let res = 0;
for (let i = 0; i < sum.length; i++) {
    res += sum[i];                                      
}