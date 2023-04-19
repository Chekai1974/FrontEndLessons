const section = document.querySelector("#root"); // взять section
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
];
const container = document.createElement('div'); // создать div
container.classList.add("container"); // добавить class to div

const cards = document.createElement('div'); // создать div
cards.classList.add("cards"); // добавить class to div

const btns = document.createElement('div'); // создать div
btns.classList.add("btns"); // добавить class to div

container.append(cards, btns); // открыть в container (cards & btns)
section.append(container); // открыть в section (container)

for (let i = 0; i < images.length; i++) { // цыкл что бы создать divs по размеру массива и добавить в divs backgroundImage ссылку с с елемента масива
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${images[i]})`;
    cards.append(card);
};
 
let slidIndex = 0;
for (let i = 0; i < images.length; i++) {
    const buttons = document.createElement('button');
    btns.append(buttons);
    const btnChildren = btns.children;// все елементи buttons   
    btnChildren[0].classList.add("active")
    buttons.onclick = () => {
        slidIndex = i;
        cards.style.left = `${slidIndex * 500 * -1}px`;
        for (const elem of btnChildren) {
            elem.classList.remove("active");
        };
        buttons.classList.add("active");
    };
};
