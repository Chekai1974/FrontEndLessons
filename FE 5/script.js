// const h1 = document.querySelector('h1')
// const h3 = document.querySelector('h3')

// h3.innerText = 'Hello from JavaScript'
// h3.textContent = 'Hello from textContent'
// h3.innerHTML = ' Hello from innerHTML'

// console.log(h1);
// console.log(h3);

// let last_li = document.querySelector('#green')
// let rainbow = document.querySelectorAll('li')
// console.log(last_li);
// console.log(rainbow);

// let p = document.querySelector('#two')
// p.innerHTML = '<b>Hi</b>'


// let img = document.querySelector('img')
// img.setAttribute('src','https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614776/2022_chevrolet_corvette_stingray_angularfront.jpg')


// const images = document.querySelectorAll('#photo img')

// for (let i = 0; i < images.length; i++) {
//     if (images[i].getAttribute('alt')==='1') {
//             images[i].setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*')
//     }

// }


// let a = document.querySelectorAll('a')
// let p = document.querySelector('#two')
// let href = []
// for (let link of a) {
//     href.push(link.getAttribute('href'))
// }

// p.innerText=href.join('\n')

// const li = document.querySelectorAll('li')
// for (let lis of li) {
//     lis.style.backgroundColor = lis.innerText
// }
// let root = document.getElementById('root')
// let h2 = document.createElement('h2')

// h2.innerText = 'lorem4'

// console.log(h2);
// root.appendChild(h2)


// for (let i = 1; i <= 10; i++) {
//     let p = document.createElement('p')
//     p.innerText = [i]
//     root.appendChild(p)
// }
let arr = ['HTML', 'CSS', 'JavaScript', 'Python', 'C#']
for (let str of arr) {
    let li = document.createElement('li')
    li.innerText =str
    root.appendChild(li)
}