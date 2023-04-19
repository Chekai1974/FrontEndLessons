// 1) Создать класс User со свойствами name, username и role.

// 2) Добавить метод change_role, который перед изменением роли проверяет,
// является ли указанное значение одним из массива ‘manager’, ‘admin’, ‘root’, ‘guest’.

// 3) Добавить свойство status, и метод change_status которое может принимать одно из предложенных
// значений online, offline, work.

class User {
    static users = [];
    static rols = ["manager", "admin", "root", "guest"]
    static status = ["online", "offline", "work"]

    constructor(name, username, role, status) {
        this.name = name;
        this.username = username;
        this.role = role;
        this.status = status;
        User.users.push(this)
    };
    
    get showRole() {
        return this.role
    }
    set change_role(newRole) {
        if (User.rols.includes(newRole)) {
            this.role = newRole;
        } else {
            console.log("Такой роли нету");
        };
    };
    

    get showStatus() {
            return this.status
    } 
    set change_status(newSatus) {
        if (User.status.includes(newSatus)) {
            this.status = newSatus;
        };
    };
};

const mark = new User("Marko", "Zizu", "Pedestrian", "offline")
const dima = new User("Dima", "Zizulka", "Treiner", "online")
mark.change_role = "admin" //set //console.log("Marko", "Zizu", "admin", "offline")
dima.change_status = "work" //get // console.log("Dima", "Zizulka", "Treiner", "work");
console.log(User.users); // [User, User]


// get and set
class Man {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    get name() {
        return `${this.firstName} ${this.lastName}`
    }
    set name(newFirstName) {
        this.firstName = newFirstName
    }
};
const student = new Man("Marko", "Slyvka")
student.name = "Dima" //set
console.log(student.name);//get


// -----2-----
// 1)Создать класс Product со свойствами title, price, count.
// 2)Создать статическое свойство income, которое изначальное равно нулю.
// 3)Создать метод sale. Которое уменьшает count на единицу.
//   Если count уже равен нулю, то вызывается исключение.Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.
// 4)Создать статическое свойство items, которое хранит созданные экземпляры класса Product.
// 5)Добавить getter и setter для свойства price.При добавлении идет проверка, что цена больше 0.
class Product {
    static income = 0;
    static items = [];
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
        Product.items.push(this);
    };
    

    sale() {
        try {
            if (this.count === 0) {
                throw new Error("Нету товара")
            } else {
                this.count--
                Product.income += this.price
            }

        } catch  (error) {
            console.error(error);
        }
    }
    
    get getPrice() {
        return `price of titel: ${this.price}`
    }
    set setPrice(newPrice) {
        try {
            if (newPrice > 0) {
                this.price = newPrice
            } else {
                throw new Error("Недопустимая цена")
            }
        } catch (e) {
            console.log(e);
        }
    }
};

const book = new Product("Book", 100, 15)
console.log(book); // Product {title: 'Book', price: 100, count: 15}
book.sale()
console.log(book); // Product { title: 'Book', price: 100, count: 14 }
console.log(Product.income); // 100
book.setPrice = 125;
console.log(book); //Product {title: 'Book', price: 125, count: 14}



// ------3------
// 6)Создайте класс Book со свойствами title, author и yearPublished.Добавьте статическое свойство, где
//   будут сохранены все экземпляры Book.Добавьте статический метод listAuthors, который возвращает массив
//   со  всеми именами авторов.

class Book {
    static books = [];
    constructor(title, author, yearPublisher) {
        this.title = title;
        this.author = author;
        this.yearPublisher = yearPublisher;
        Book.books.push(this)
    }
    static listAuthors() {
        let newArrysOfBook = Book.books.map(elem => elem.author)
        return newArrysOfBook
    }
}
const marko = new Book("World Space", "Marko", 2020)
const marko2 = new Book("World Space2", "Marko", 2023)
console.log(marko);
console.log(Book.listAuthors());
