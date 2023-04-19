const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btnTry = document.querySelector('#btn');
const btnReaload = document.querySelector("#reload");
const divText = document.querySelector('.result');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

function result(messege) {
    divText.innerHTML = `<h2>${messege}</h2>`
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = parseInt(input.value);
    attempt++
    if (value==randomNumber) {
        result(`You are right. Just:${attempt} attempts`)
    } else if (attempt>=10) {
        result(`You come off a loser. Number was ${randomNumber}`)
    } else {
        value > randomNumber ? result(`Your number more then random`) : result(`Your number less then random`)
    }
})

btnReaload.addEventListener('click', (e) => {
    e.preventDefault();
    result('');
    input.value = "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
})
