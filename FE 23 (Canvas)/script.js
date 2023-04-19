// canvas

const canvas = document.querySelector("#myCanvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
})

// getContext - 2d (method of canvas)
// WebGL = webgl2, webgl3

// __________________________________________________________________
// strokeRect - контур прямоугольника

// strokeStyle = ""; border Color
// lineWidth = значения (1,2,3,4) border Width
//            px px   px    px
// strokeRect(x, y, width, height) place create
// __________________________________________________________________



// __________________________________________________________________
// fillRect() - прямоугольник с background-color

// fillRect(x, y, width, height)
// fillStyle - "yellow" background-color
// globalAlpha - прозрачность
// __________________________________________________________________


// __________________________________________________________________
// beginPath - начало пути линий

// moveTo(x, y) откуда старт
// lineTo(x, y) старт и конец линии по координатам
// ctx.stroke() - нарисовать
// __________________________________________________________________

// ctx.clearRect(75, 75, 50, 50); удаляет все в этом пропижутку

function draw() {
    // const rec = canvas.getContext("2d")
    // rec.strokeStyle = "green"; //borderColor
    // rec.lineWidth = 5; //borderWidth
    // rec.strokeRect(40, 40, 300, 400) //розположения и размер




    // rec.globalAlpha = 0.5;
    // rec.fillStyle = "yellow"
    // //          сам холст на всё окно
    // //           (        x       )  y    width  height
    // rec.fillRect(40, 40, 300, 400)  // это нашего прямоугольника background-color
    


    //------
    // // отрисовать прямоугольник, который занимает весь размер экрана с отступами по 10 
    // // единиц от каждой стороны.
    // rec.strokeRect(10, 10, canvas.width - 20, canvas.height -20)
    //------
    
    
    //------
    // задача лесинка
    // const ctx = canvas.getContext("2d");
    // const numOfrec = 10;
    // const minfillHeigth = canvas.height / numOfrec; // minimal висота шаблона(fillRect)
    // const avgfilltWidth = canvas.width / numOfrec; // ширина

    // for (let i = 0; i < numOfrec; i++) {
    //     const fillHeigth = minfillHeigth * (i + 1)
    //     const fillX = avgfilltWidth * i
    //     const fillY = canvas.height - fillHeigth

    //     ctx.fillStyle = "orange"
    //     ctx.fillRect(fillX, fillY, avgfilltWidth, fillHeigth)
    // };
    // ------

    // ------
    // // Написать цикл, который выводит 10 квадратов друг в друге.
    // const gap = canvas.width / numOfrec / 2;
    // let minRectWidth = canvas.width / numOfrec;
    // for (let i = 0; i < numOfrec; i++) {
    //     const sqX = canvas.width / 2 - minRectWidth/2;
    //     const sqY = canvas.height / 2 - minRectWidth / 2;
    //     ctx.strokeRect(sqX, sqY, minRectWidth, minRectWidth);
    //     minRectWidth += gap;
    // };
    // ------
    
    const ctx = canvas.getContext("2d")
    const ctx2 = canvas.getContext("2d")
    // ctx.beginPath() // начать 
    // ctx.moveTo(50, 300) // точка начала 
    // ctx.lineTo(300, 200) // точка конца
    // ctx.lineTo(500, 600) // точка конца
    // ctx.stroke() // нарисовать

    // ctx.beginPath() // начать 
    // ctx.moveTo(600, 600) // точка начала 
    // ctx.lineTo(600, 450) // точка конца
    // ctx.lineTo(450, 600) // точка конца
    // ctx.closePath()
    // ctx.fillStyle = 'red'
    // ctx.fill() // нарисовать

    ctx2.beginPath() // начать 
    ctx2.moveTo(300, 300) // точка начала 
    ctx2.lineTo(900, 750) // точка конца
    ctx2.lineTo(900, 750) // точка конца
    ctx2.lineTo(750, 900) // точка конца
    ctx2.lineTo(300, 300)
    ctx2.fillStyle = 'red'
    ctx2.fill() // нарисовать

};
draw();

