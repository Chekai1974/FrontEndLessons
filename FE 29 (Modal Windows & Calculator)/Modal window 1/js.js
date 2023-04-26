// Popa Up (Modal Window)
const btn = document.querySelector('#open')
const span = document.querySelector('.close')
const model = document.querySelector('.model')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    model.style.display = "block"
})
span.addEventListener('click', (e) => {
    e.preventDefault();
    model.style.display = "none"
})

window.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === model) {
        model.style.display = "none"
    }
})