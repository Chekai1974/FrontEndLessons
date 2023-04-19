// const person = {
//     nam: "Joe"
// }
// person.age = 36;

// person["Last name"] = 'test'

// person.nam = "Alex"

// delete person.age
// console.log(person);
//

// function createObj(str,number) {
//     let res = {}
//     for (let i = 0; i < number; i++) {
//         res[str + i] = i;
//     }
//     return res
// }
// console.log(createObj('cat',3));

// function test1(num) {
//     let result = {};
//     for (let i = 0; i <=num; i++) {
//         result[i] = i;
//     }
//     return result
// }
// console.log(test1(3));

//1. Напишите функцию, которая в качестве аргументов получает два числа и возвращает
// массив чисел со значениями от меньшего числа к большему.
function test1(first, second) {
    let res = [];
    if (first < second) {
        for (let i = first; i <= second; i++) {
        res.push(i)
    }
    } else {
        for (let i = second; i <= first; i++) {
            res.push(i)
        }
    }
    
    return res
}
console.log(test1(10, 5));

//2. В программе объявлена переменная list, которая содержит массив чисел.
//   Используя цикл посчитайте сумму чисел и выведите в консоль.
function test2(first, second) {
    let res = [];
    if (first > second) {
        for (let i = first; i >= second; i--) {
        res.push(i)
    }
    } else {
        for (let i = second; i >= first; i--) {
            res.push(i)
        }
    }
    
    return res
}
console.log(test2(5, 10));

//3. В программе объявлена переменная list, которая содержит массив чисел. 
//   Используя цикл посчитайте сумму чисел и выведите в консоль.
const list = [5, 6, 8, 9, 2]
let result = 0;
 for (let i = 0; i < list.length; i++) {
     result += list[i];
}
console.log(result);

//4. В программе объявлена переменная list, представляющая массив положительных и отрицательных 
// численных значений.Используя цикл, выведите в консоль сумму положительных чисел.
const list2 =  [5,6,8,9,2,-6,-5,-8,-2]
let result2 = 0;
for (let i = 0; i < list2.length; i++) {
     if (list[i]>0) {
        result2 += list2[i];
     }
     
}
console.log(result2);

//5. В программе объявлена переменная list, которая содержит массив чисел. 
//   Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
const list3 = [1,2,3,4,5,6,8,10]
let result3 = 0;
let result4 = 0;
for (let i = 0; i < list3.length; i++) {
     if (list3[i] % 2 === 0) {
         result3 += list3[i];
         
     } else {
        result4 += list3[i];
    }
    
}
console.log(result3 > result4 ? result3 - result4 : result4 - result3)

//6.Напишите функцию, которая в качестве аргумента получает массив из чисел и
// возвращает максимальное число из массива.

function test4(list4) {
    let max = 0;
    for (let i = 0; i < list4.length; i++) {
        if (list4[i] > max) max = list4[i]
    }
    return max
}
console.log(test4([1, 5, 7, 4]));

//7. Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами
// min, max, avg(среднее значение) с соответствующими значениями по массиву.

function Num(array) {
    const obj = {};
    let max = 0;
    let min = array[0];
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } else {
            min=array[i];
        }
        avg += (array[i] / array.length)
    }
    obj.min=min
    obj.max=max
    obj.avg = avg
    return obj
}
console.log(Num([4, 5, 71, 8,]))