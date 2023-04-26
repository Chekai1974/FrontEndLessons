const btn = document.querySelector('.view');
const clos = document.querySelector('.close');
const modal = document.querySelector('.modal');

function closeModal() {
    clos.addEventListener('click', () => {
    modal.classList.remove('show')
    modal.classList.add('hide')
        setTimeout(() => {
        modal.style.display = "none"
    },2000);
})
}
clos.onclick = () => {
    closeModal()
}
btn.addEventListener('click', () => {
    modal.classList.remove('hide')
    modal.classList.add('show')
})

window.onclick = (ev) => {
    if (ev.target === modal) {
        closeModal()
    }
}