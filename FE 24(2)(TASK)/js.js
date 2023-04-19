const canvas = document.querySelector("#myCanvas")
const input = document.querySelector("#plot_size")
const ctx = canvas.getContext("2d")
canvas.width = 700
canvas.height = 700



class Plot{
    static size = 50;
    static plots = []
    static change_size(ctx, value = 1) {
        Plot.size = value;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        Plot.plots.forEach((elem) => elem.render(ctx))
    }
    constructor(arrX, func, color) {
        this.arrX = arrX;
        this.func = func;
        this.color = color;
        Plot.plots.push(this)
    }
    render(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath()
        this.arrX.forEach(elem => {
            let y = this.func(elem)
            ctx.lineTo(elem * Plot.size + canvas.width / 2, y * Plot.size + canvas.height / 2)
        });
        ctx.stroke()
    }
    
}
//        оператор spread
const listX = [...new Array(10000)].map((elem, index) => index * 0.01 - 50)
const parabola = new Plot(listX, (x) => -(x **2), "green");
parabola.render(ctx)
const sin = new Plot(listX, Math.sin, "red");
sin.render(ctx);

input.addEventListener("input", (e) => {
    const value = e.target.value
    Plot.change_size(ctx,value)
})