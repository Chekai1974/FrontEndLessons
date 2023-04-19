
// OOP

//variant 1 (class)
class Dog {
    //метод()
    addName(name) {
        // console.log("Name");
        this.na = name
    }
};

const dog_1 = new Dog();
const dog_2 = new Dog();

// dog_1.name = "Rex"
// dog_2.name = "Sharik"

// console.log(dog_1);
// console.log(dog_2);

dog_1.addName("DIX");
// console.log(dog_1);

//variant 1(constructor)

class Dog2 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    bark(gaw) {
        this.dogsBark = gaw
    }
}
const dog_one = new Dog2("rex", 2)
dog_one.bark("GAW GAW")
// console.log(dog_one);






// ________1________
// Создать класс User со свойствами name, username, age.
// ________2________
// Добавить метод b_day которое увеличивает возраст на единицу
//_________3________
// Добавить метод change_username, который получает в качестве 
// аргумента новое имя пользователя и меняет его.

class User {
    constructor(name, username, age) {
        this.name = name;
        this.username = username;
        this.age = age;
    };
    b_day() {
        this.age++;
    };
    change_username(newUserName) {
        this.username = newUserName;
    };
};

const mark = new User("Mark", "Slyvka", 18)
mark.b_day()                          //19
mark.b_day()                          //20     
mark.change_username("Joh")//Dima
// console.log(mark);




// ________1________
// Создать класс Product со свойствами title, price, count.
// И методами change_price и sale.
// Метод change_price принимает аргумент new_price и устанавливает
// свойство price в это новое значение.
// Метод sale принимает аргумент discount_percent, рассчитывает скидку
// на основе этого процента и вычитает ее из свойства price
// ________2________
// Доработать метод change_price, который принимает в качестве аргумента
// новую цену и делает проверку, если цена меньше нуля то цена не меняется
//  и вызывается исключение “цена не может быть отрицательной”.
// ________3________
// Доработать класс метод sale, который уменьшает count на единицу.Но если count 
// уже равен нулю, то вызывается исключение “товар закончился”.

class Product {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    change_price(new_price) {
        this.price = new_price
        try {
            if (new_price < 0) {
                throw new Error("цена не может быть отрицательной")
            } else {
                this.price = new_price
            }
        } catch (e){
            console.log(e);
        }
    }
    sale(discount_percent) {
        const discount = discount_percent * this.price / 100;
        this.price -= discount;
    }
    change_count() {
        try {
            if (this.count >1) {
                this.count--
            } else {
                throw new Error("товар закончился")
            }
        } catch (e){
            console.log(e);
        }
    }
}
const book = new Product("Book", 180, 3)
// book.change_price(200)
// console.log(book); // "Book", 200, 3

// book.sale(10)
// console.log(book); // "Book", 180, 3

const car = new Product("BMV", 20000, 1)
console.log(car);     // "BMV", 20000, 1
car.change_count()
console.log(car);     // Error("товар закончился")
// car.change_count()
// console.log(car);     // "BMV", 20000, 1




// ________1________
// Создайте класс с именем Triangle, который имеет свойства a, b и c,
// представляющие длины сторон треугольника.Класс должен иметь метод getPerimeter
// который вычисляют периметр.Класс также должен использовать блоки try-catch
// для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку,
// если значения a, b и c не являются допустимыми числами.

class Triangle{
    constructor(a, b, c) {
        try {
            if (typeof a === "number" && typeof b === "number" && typeof c === "number" && a > 0 && b > 0 && c > 0 ) {
                this.a = a;
                this.b = b;
                this.c = c;
            } else {
                throw new Error("НЕдопустимое число")
            }
        } catch (e){
            console.log(e);
        }
    };
    getPerimeter() {
        const result = this.a + this.b + this.c;
        console.log(result);
    };
};
const p = new Triangle(1, 3, 4)
console.log(p);
p.getPerimeter()




// ________1________
// Создайте класс BankAccount со свойствами balance и accountNumber.
// Добавьте в класс методы, позволяющие пользователю вносить деньги на счет,
// снимать деньги со счета и проверять баланс счета.

class BankAccount{
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    };
    put(putMoney) {
        this.balance += putMoney;
    };
    get(getMoney) {
        try {
            if (getMoney <= this.balance) {
                this.balance -= getMoney;
            } else {
                throw new Error("Нехватает средств")
            }
        } catch (e) {
            console.log(e);
        }
    };
    check() {
        console.log(`На вашем балансе: ${this.balance}`);
    };
}
const bankAccount = new BankAccount(0, 3)
bankAccount.put(1001)
bankAccount.check()
bankAccount.get(5000)
bankAccount.check()

// ________1________
// Создайте класс Student со свойствами name, age, email и grades, а также методы addGrade и
// getAverageGrade.Метод addGrade должен принимать оценку и добавлять ее в массив grades,
// если оценка является числом от 0 до 100. Если оценка не является числом или находится
// вне диапазона 0 - 100, метод должен выдать ошибку.Метод getAverageGrade должен вычислить
// средний балл всех оценок в массиве grades и вернуть его.

class Student{
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = [];
    };
    addGrade(newGrades) {
        try {
            if (typeof newGrades === "number" && newGrades > 0 || newGrades <=100) {
                this.grades.push(newGrades)
            } else {
                throw new Error("оценка не является числом или находитсявне диапазона 0 - 100 ")
            }
        } catch (e) {
            console.log(e);
        }
    };

    getAverageGrade() {
        const sum = this.grades.reduce((acc, cur) =>  acc + cur )
        const result = sum / this.grades.length
        console.log(Math.round(result));
    };
};

const student = new Student("Vasya", 16, "vasya@gmail.com")
student.addGrade(4)
student.addGrade(5)
student.addGrade(8)
student.getAverageGrade()
console.log(student);


//_________1_________
// Создайте класс ShoppingCart, который имеет свойства items и totalPrice,
// а также методы addItem и removeItem.Метод addItem должен добавлять товар в
// корзину и обновлять общую цену, а метод removeItem должен удалять товар из
// корзины и обновлять общую цену.Оба метода должны выдавать ошибку,
// если переданный аргумент не является допустимым объектом со свойствами name и price.

class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    addItem(product) {
        try {
            if (typeof product === "object" && product.hasOwnProperty("name") && product.hasOwnProperty("price")) {
                this.items.push(product);
                this.totalPrice += product.price;
            } else {
                throw new Error("не является допустимым объектом");
            }
        } catch (e) {
            console.log(e);
        }
    }
    removeItem(product) {
        try {
            if (typeof product === "object" && product.hasOwnProperty("name") && product.hasOwnProperty("price")) {
                const index = this.items.findIndex(i => i.name === product.name && i.price === product.price);
                if (index != -1) {
                    this.items.splice(index, 1);
                    this.totalPrice -= product.price;
                }
            } else {
                throw new Error("не является допустимым объектом");
            }
        } catch (e) {
            console.log(e);
        }
    }
}
let cart = new ShoppingCart();
cart.addItem(
    {
        name: "Book",
        price: 20
    }
)
console.log(cart);