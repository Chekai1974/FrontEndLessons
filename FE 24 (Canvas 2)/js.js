const canvas = document.querySelector("#myCanvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circle()
    task()
    zoom()
})

//acr(x, y, radius startAngel, endAngle, clockwise)

// function circle() {
    // const ctx = canvas.getContext("2d")
    // -------------1------------
    // ctx.beginPath()
    // ctx.arc(200, 200, 100, 0, 2 * Math.PI, false)
    // ctx.stroke()
    // const ceterX = canvas.width / 2;
    // const ceterY = canvas.height / 2;
    // let radius = 10;
    // for (let i = 0; i < 10; i++) {
    //     ctx.beginPath()
    //     ctx.arc(ceterX, ceterY, radius, 0, 2 * Math.PI)
    //     ctx.stroke()
    //     ctx.closePath()
    //     radius += 50
    // }
    // -------------2------------
    // let x = 200;
    // let y = 200;
    // for (let i = 0; i < 4; i++) {
    //     if (i==1 || i==2) {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, Math.PI)
    //         ctx.stroke()
    //     } else {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, 2 * Math.PI)
    //         ctx.stroke()
    //     }
    //     x += 200
    // }

    // -------------3------------
    // Круги по углах
    // ctx.beginPath()
    // ctx.arc(100,100, 100, 0, 2 * Math.PI)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(canvas.width-100, 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(canvas.width - 100, canvas.height - 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(100, canvas.height-100, 100, 0, 2 * Math.PI)
    // ctx.stroke()
    // ctx.closePath()

// }
// circle()

// -------------4------------
// function task() {
//     const ctx = canvas.getContext("2d");
//     const data = [
//         {
//             title: 'javascript',
//             amount: 150000
//         },
//         {
//             title: 'python',
//             amount: 180000
//         },
//         {
//             title: 'golang',
//             amount: 130000
//         },
//         {
//             title: 'java',
//             amount: 120000
//         },
//         {
//             title: 'java',
//             amount: 200000
//         },
       
//     ];
//     data.sort((a, b) => b.amount - a.amount);
//     const gap = 20;
//     const height = 60;
//     const maxWidth = canvas.width - 2 * gap;
//     const maxAmoutn = data.reduce((acc, cur) => cur.amount > acc ? cur.amount : acc, 0);
//     let y = gap
//     data.forEach((item) => {
//         const lenght = (item.amount / maxAmoutn) * maxWidth
//         ctx.fillStyle = "green"
//         ctx.fillRect(gap, y, lenght, height)
//         ctx.fillStyle = "white"
//         ctx.font = "18px Arial"
//         ctx.fillText(item.title, gap*2, y+height/2+5)
//         y += gap + height
//     })
// }
// task()
// fillText (Text, x, y)

// -------------5------------
function zoom() {
    const ctx = canvas.getContext("2d")
}
