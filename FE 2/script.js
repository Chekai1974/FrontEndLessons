// let value = prompt('Value')
// if (value === 0) {
//     console.log("MB");
// } else if (value % 2 === 0) {
//     console.log("Yeas");
// } else {
//     console.log("No");
// }
// _________________________alert_____________________
// (вывдо даных пользувателю через вспливаюшие окно)

// _________________________promt_____________________
// (ввод даных пользуватем через вспливаюшие окно)

// _________________________push_____________________
// (добавть елемент в полесднее место)
let num1 = [1, 2, 3]
num1.push(4,5,6); //return last string
console.log(num1);


// _________________________pop_____________________
// (удалет елемент с полесднего места)
let nam = ["Mark", "Sasha", "Dima"]
nam.pop() // return last item
console.log(nam);

//_________________________unshift_____________________
// (добавть елемент в начало места)
let num2 = [2, 3, 4]
num2.unshift(1)
console.log(num2);
let fe = 33

//_________________________shift_____________________
// (удалет елемент с начального места)
let num3 = [1, 3, 4]
num3.shift()
console.log(num3);


// =====================================
let array = []
let number1 = prompt("first")
let number2 = prompt("second")
let number3 = prompt("third")
array.push(+number1,+number2,+number3)

console.log(array);
// =====================================


//_________________________for(цыкл)_____________________
let array2 = [2, 3, 4, 5]
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
   
}
console.log("__________________");
 
//_________________________while(цыкл)_____________________
let vall1 = 4;
while (vall1 <= 9) {
    console.log(vall1);
    vall1++;
}
console.log("------------");
//_________________________do while(цыкл)_____________________
let vall2 = 2;
do {
    console.log(vall2);
    vall2++;
} while (vall2 <= 9)
console.log("------------");


// =====================================
const arr = [15,8,4,2,4,7,12,35,45,58,0]
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3===0 && arr[i]!==1 && arr[i]!==0) {
        console.log(arr[i]);
    }
}
console.log("------------");
// =====================================


//_________________________агрикация_____________________

const array3 = [1,5,4,7,2,3,4,5,6,7,4,5,6]
let sum = 0;
let sum2 = 0;
let res=0
for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2===0) {
        sum+=array3[i]
    } else if(array3[i] % 2 !==0){
        sum2+=array3[i]
    }
    if (sum = sum2) {
        console.log(0);
    } else if(sum < sum2){
        res = sum2 - sum;
    }else {
        res = sum - sum2;
    }
}
console.log(sum);
console.log(sum2);
console.log(res);