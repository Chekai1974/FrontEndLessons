// sort
const numbers = [0, 15, 16, 10, 2]
//                  a-b = по возростанию
numbers.sort((a, b) => a - b)
//                  b-a = по 
numbers.sort((a,b)=>a-b) 
console.log(numbers);

//----1----- sort
const arr = [
    { id: 4, title: "велосипед", price: 45000 },
    { id: 1, title: "самокат", price: 15000 },
    { id: 3, title: "сноуборд", price: 20000 },
    { id: 2, title: "лыжи", price: 22000 },
];  
// arr.sort((a, b) => a.id - b.id)
// .filter((pr) => pr.price > 40000)
arr.sort((a, b) => b.price - a.price)
console.log(arr);

// ----2---- sort (sum Two Smallest Nums)
function sumTwoSmallestNums(array) {
    array.sort((a, b) => a - b)
    return array[0]+array[1]
}
console.log(sumTwoSmallestNums([4, 6, 10, 3])); 

// -----3----- sort (sum Two Smallest Nums With Filter)
function sumTwoSmallestNumsWithFilter(params) {
    let filt = params.sort((a, b) => a - b).filter((num) => num > 0)
    return filt[0]+filt[1]
}
console.log(sumTwoSmallestNumsWithFilter(([3, 7, -2, 9, -5, 2])));



// reduce -  (accumulator, current),  как доп 10
// ------1----- (reduce)
const num = [1, 5, 4, 7, 8]
//                       1             5
//                       6             4
//                       10            7
//                       17            8
//                          result=25                                    10- це аргумент accumulator сначала (тоесть 10 + 1)
let result = num.reduce((accumulator, current) => accumulator + current, 10)
console.log(result);

// ------2----- (reduce) positveSum
const nums = [-5, -6, 1, 5, 4, 7, 8]
let positveSum = nums.reduce((acc, cur) => {
    if (cur>0) {
        return acc + cur
    } else {
        return acc
    }
}, 0)
console.log(positveSum);

// -----3----- (reduce) and (filter)
const number = [1, 2,-2, 3, 4, 5, -4,6, 7, 8, 9]
// let resSum = number.reduce((acc, cur) => {
//     if (cur > 0 && cur % 2 == 0) {
//         return acc + cur
//     } else {
//         return acc
//     }
// }, 0)
let resSum = number.filter((n) => n % 2 == 0 && n>0).reduce((acc, cur) => acc + cur)
console.log(resSum);

// -----4----- (reduce) maxNum
let maxNum = number.reduce((acc, cur) => {
    if (cur>acc) {
        return cur
    } else {
        return acc
    }
}, 0)
console.log(maxNum);

// -----5----- (reduce) maxPrice {in object}
const array = [
    { id: 1, price: 10000 },
    { id: 2, price: 15000 },
    { id: 3, price: 1000 },
    { id: 4, price: 45000 },
    { id: 5, price: 30000 },
];
let maxPrice = array.reduce((acc, cur) => cur.price > acc.price ? cur : acc)
console.log(maxPrice);


// -----6----- (reduce) and forEach
const products = [
    { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
];

// -----6----- (reduce) sum_marks
// products.forEach((prod) => {
//     prod.sum_marks = prod.marks.reduce((acc, cur) => acc + cur)
//     delete prod.marks
// })
// console.log(products);

// -----6----- (reduce) max_mark
// products.forEach((pr) => {
//     pr.max_mark = pr.marks.reduce((acc, cur) => cur > acc ? cur : acc)
//     delete pr.marks
// })
// console.log(products);

// -----6----- (reduce) avg_mark
products.forEach((pr) => {
    pr.avg_mark = pr.marks.reduce((acc, cur) => cur + acc)/pr.marks.length
    delete pr.marks
})
console.log(products);