
// область видимости - global, function, block


// Правила формирования this
// default binding = sayHi()
// implicit binding = obj.sayHi() // это метод обьекта (строка 15-24 (sayThis: sayHi))
// explicit binding = call(), apply()
// new binding binding = bind()

function sayHi(start) {
    console.log(`${start}, my name is ${this.name} and I'm ${this.age} years old!`);
}

const person1 = {
    name: "Alisa",
    age: 20,
    sayThis: sayHi,
}
const person2 = {
    name: "Joe",
    age: 30,
    say: sayHi,
}
// person1.sayHi()
// person2.say()


// CALL, APPLAY, BIND

// call
// call syntax = function.call(thisObj, arg1, arg2, ...)

// sayHi.call(person1, "Hello")
// sayHi.call(person2, "Hi")

// apply

// apply syntax = function.apply(thisObj, [arg1, arg2, ...])
// sayHi.apply(person1, ["Bay"])


// bind
// const newSayHi = sayHi.bind(person1)
// newSayHi("Hello") // Только person1 будет





//______________________________________________________________________________________________________________
// 1) Создайте объект со свойством value и методом, который умножает значение на заданный коэффициент.
// 2. Создайте второй объект со свойством value и используйте метод call для
// вызова метода первого объекта с контекстом второго объекта, передавая коэффициент в
// качестве аргумента.Используйте так же apply для решения этой задачи.
const obj1 = {
    value: 1,
    kof: function (params) {
        return this.value *= params
    },
};
const obj2 = {
    value: 2,
};
console.log(obj1.kof.call(obj2,2)); // 4
console.log(obj1.kof.apply(obj2, [2]));// 8
//_______________________________________________________________________________________________________________


//_______________________________________________________________________________________________________________
// Создайте объект со свойством name и метод, выводящий приветственное сообщение с помощью аргументов. 
// Как аргумент принимает приветственное слово и знак препинания в конце предложения.Так же создайте новый 
// обьект со свойством  name.Создайте новую функцию с помощью bind, которая имеет второй объект в качестве 
// значения this и приветственное слово как аргумент, и вызовите новую функцию где будете передавать второй
// аргумент - знак препинания в конце предложения.
const obj3 = {
    name: "Joe",
    show: function (start, sign) {
        console.log(`${start} ${this.name} ${sign}`);
    }
}

const obj4 = {
    name: "Dasha",
}
const newShow = obj3.show.bind(obj4, "Hi", "!")
newShow()
//_______________________________________________________________________________________________________________



//_______________________________________________________________________________________________________________
const object = {
    _name: "Anna",
    func1: function () {
        console.log(this._name);
    },
    func2: () => {
        console.log(this._name);
    }
}
object.func1() // Anna
object.func2() // undefined
//______________________________________________________________________________________________________________


//______________________________________________________________________________________________________________
// Создайте класс Vehicle со свойствами make, model и year.Добавьте статический метод isAntique,
// который принимает экземпляр Vehicle и возвращает true,
// если свойство year имеет возраст более 25 лет, и false в противном случае.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };
    static isAntique(params) {
        let fullYear = new Date().getFullYear()
        let age = fullYear - params.year
        return age > 25
    };
};

const car = new Vehicle("car", "audi", 1997)
console.log(Vehicle.isAntique(car));