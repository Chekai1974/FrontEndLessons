const canvas = document.querySelector('#watch')
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d')
ctx.strokeStyle = "#ff00f7";
ctx.lineWidth = 17;
ctx.shadowColor = '#ff00f7';
ctx.shadowBlur = 15;

function degreeToRadian(deg){
    return (deg * Math.PI) / 180;
};
function render() {
    const now = new Date(); // экземпляр класса конструктор 
    const today = now.toDateString(); // получить дату
    const time = now.toLocaleTimeString("en-US", { hour12: false }); // получить точное время 18:04:29  
    const hours = now.getHours(); // получить часы 
    const minutes = now.getMinutes(); // получить минуты
    const seconds = now.getSeconds(); // получить секудны
    const ms = now.getMilliseconds(); // получить милисикунды
    const slowS = seconds + ms/1000; //slowS= 1s + 1000ms/1000
    const slowM = minutes + slowS / 60; //slowM = 1m + 60s/60
    const gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#3a0335"); // от фиолетового 
    gradient.addColorStop(1, '#000000'); // до черного
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 200, degreeToRadian(270), degreeToRadian((hours * 30) - 90));
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 150, degreeToRadian(270), degreeToRadian((slowM * 6) - 90))
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, degreeToRadian(270), degreeToRadian((slowS * 6) - 90))
    ctx.stroke()
    
    ctx.font = "20px Helvetica";
    ctx.fillStyle = "#ff00f7";
    ctx.fillText(today, canvas.width / 2 - 75, canvas.height / 2);

    ctx.font = "20px Helvetica";
    ctx.fillStyle = "#ff00f7";
    ctx.fillText(`${time}:${ms}`, 190, canvas.height / 2 + 30);


};
setInterval(() => {
    render()
}, 60);
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

