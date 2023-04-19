

// object style
// const p = document.getElementById('about')
// p.style.fontSize = "40px"
// p.style.color = "blue"



// // CSS Text
// p.style.cssText = "color: red; font-size: 100px;"



//------1-------
// for (let i = 0; i <=255; i+=5) {
//     let div = document.createElement('div')
//     div.style.width = "300px"
//     div.style.height = "300px"
//     div.style.border = "1px black solid"
//     div.style.display="inline-block"
//     div.onmouseover = () => {
//         div.style.backgroundColor = `rgb(128,128,${i}`
//     }
//     div.onmouseout = () => {
//         div.style.backgroundColor = 'white'
//     }
//     document.body.append(div)
// }

    


// classList

// classList.add("start") //добавления

// classList.remove("start") //удаления

// classList.replace("start", "end") //поменять местами 1)что удлать 2)что добавить




// -----2-------
const div = document.createElement('div')
document.body.append(div)
for (let i = 0; i < 10; i++) {
    let p = document.createElement('p')
    p.innerText = i
    p.onclick = () => {
        // if (p.classList[0] === "active") {
        //     p.classList.remove("active")
        // } else {
        //     p.classList.add('active')
        // }

        // taggle
        p.classList.toggle('active')
    }
    div.append(p)
}
    



//-----3-------
// const words = [
//     {
//         ru: "собака",
//         en: "dog",
//     },

//     {
//         ru: "кот",
//         en: "cat",
//     },

//     {
//         ru: "стол",
//         en: "table",
//     },

//     {
//         ru: "телефон",
//         en: "telephone",
//       },
// ]

//firts variant
// for (let i = 0; i < words.length; i++) {
//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     p.innerText = words[i].en
//     p.onclick = () => {
//         if (p.textContent === words[i].en) {
//             p.innerText = words[i].ru
//         } else {
//             p.innerText = words[i].en
//         }
//     }
//     div.append(p)
//     
    
// }

//second variant
// for (let i = 0; i < words.length; i++) {
//     let div = document.createElement('div')

//     let pRu = document.createElement('p')
//     pRu.innerText = words[i].ru
//     pRu.classList.add('hide')

//     let pEn = document.createElement('p')
//     pEn.innerText = words[i].en
//     pEn.classList.add('show')

//     div.append(pRu, pEn)
//     document.body.append(div)

//     div.onclick = () => {
//         if (pEn.classList[0] === 'show') {
//             pEn.classList.replace('show', 'hide')
//             pRu.classList.replace('hide', 'show')
//         } else {
//             pEn.classList.replace('hide', 'show')
//             pRu.classList.replace('show', 'hide')
            
//         }
//     }
// }