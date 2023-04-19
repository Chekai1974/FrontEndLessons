const form = document.querySelector('.form')    // перша форма
const product = document.querySelector('#product')  // инпут Названия
const price = document.querySelector('#price')    // инпут Цена
const btn = document.getElementById('sum')   // кнопка сумы
const sectionNodes = document.querySelector('#nodes')  // сексция для карочок

const h2 = document.createElement('h2')// текст когла нету товара
h2.innerText = "Товар не добавлен!"
h2.style.textAlign = "center"
sectionNodes.append(h2)


const form2 = document.querySelector('#form2')  // form2
const searchInput = document.querySelector('#search')  // инпкт для поиска товара 


const sortBtn = document.querySelector('#sortPrice')//sortBtn

let products = [] // масив для введеного тексту для товару
// функция для
form.onsubmit = (e) => {
    e.preventDefault()

    // якщо є хоч одна картка то видаляється текст
    if (!products.length) {
        sectionNodes.removeChild(h2)
    }
    // пуш в масив
    products.push({
        product: product.value,
        price: price.value
    })
    newCard()
    // обнулення значень масиву
    product.value = ""
    price.value = ""
    
}

// створення карток
function createNode(product, price, index) {
    let div = document.createElement('div')
    div.classList.add('node')

    //---
    // кнопка що видаляє
    let thisBtn = closeBtn()
    div.append(thisBtn)
    thisBtn.onclick = () => {
        let newArray = []
        for (let i = 0; i < products.length; i++) {
            if (i !== index) {
                newArray.push(products[i])
            }
            
        }

        products = newArray
        newCard()

        if (!products.length) {
            sectionNodes.append(h2)
        } 
        
    }
    // при наведені на дів з'являєтся // кнопка що видаляє
    div.onmouseover = () => {
        thisBtn.style.opacity = 1;
    }
    div.onmouseleave = () => {
        thisBtn.style.opacity = 0;
    }
    //---

    // текст картки, який ввеле в інпуті
    let productP = document.createElement('p')
    let priceP = document.createElement('p')

    productP.innerText = product
    priceP.innerText = price

    div.append(productP,priceP)
    sectionNodes.append(div)
}
// кнопка що видаляє
function closeBtn() {
    let closeBtn = document.createElement('button')
    closeBtn.innerText = "X"
    closeBtn.classList.add('close')
    return closeBtn
}
// Створеня самої картки
function newCard() {
    sectionNodes.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        createNode(products[i].product, products[i].price, i)
    }
}
// Кнопка для сортування
sortBtn.onclick = () => {
    products.sort((a, b) => a.price - b.price)
    newCard()
}

// Кнопка суми
btn.onclick = () => {
    let sum = 0;
    if (products.length == 0) {
        alert("Firstly add products")
    } else {
        for (let i = 0; i < products.length; i++) {
        sum += +products[i].price
    }
    alert("End price: "+sum)
    }
    
}

// Інпут Пароль
const passform = document.querySelector('.passform')
const password = document.querySelector('#password')
const btn2 = document.getElementById('loock')
btn2.onclick = () => {
    if (password.getAttribute('type') ==='password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
}



// Пошук картки
form2.onsubmit = (e) => {
    e.preventDefault()
    sectionNodes.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        if (products[i].product === searchInput.value) {
            createNode(products[i].product, products[i].price, i)
        }
        
    }
}
















