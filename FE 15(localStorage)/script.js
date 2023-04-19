//       local storage
// .setItem, .getItem, .removeItem, .clear


// // setItem
// localStorage.setItem("name", "Mark")
// localStorage.setItem("age", 18)
// localStorage.setItem("gender", "Male")

// //getItem
// const nam = localStorage.getItem("name")
// const namH = document.createElement('h1')
// namH.innerText = nam
// document.body.append(namH)

//removeItem
// localStorage.removeItem("gender")
// localStorage.removeItem("name")
// localStorage.removeItem("age")

// const btn = document.querySelector('.toggle')
// btn.onclick = () => {
//     const value = localStorage.getItem('number')
//     if (+value === 1) {
//         localStorage.setItem("number", 0)
//     } else {
//         localStorage.setItem("number", 1)
//     }
// }

// const forms = document.querySelector('form')
// const input = document.querySelector('#name')
// forms.onsubmit = (e) => {
//     e.preventDefault()
//     localStorage.setItem("nam", input.value)
//     input.value = ""
// }    

// const back = document.querySelector("#back")
// back.onclick = () => {
//     input.value = localStorage.getItem("nam") 
// }

// const remove = document.querySelector("#remove")
// remove.onclick = () => {
//     localStorage.removeItem("nam") 
//     localStorage.clear()
// }