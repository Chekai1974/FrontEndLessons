const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btn = document.querySelector('.search');
const div_recipe = document.querySelector('.recipe');

async function fetcha(name) {
    name = name.trim()
    let cocktail_resopnse = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    if (!cocktail_resopnse.ok) {
        throw new Error("Request error")
    }
    let cocktail_data = await cocktail_resopnse.json()
    console.log(cocktail_data.drinks);
    return cocktail_data.drinks
}

function fill_cocktail(cocktail) {
    div_recipe.innerHTML = '';
    if (!cocktail) {
        const p = document.createElement('p')
        p.innerText = "Cocktail is not def.";
        div_recipe.append(p);
        return
    }
    cocktail.forEach(element => {
        const div = document.createElement('div');

        const h2 = document.createElement('h2');
        h2.innerText = element.strDrink

        const img = document.createElement('img');
        img.setAttribute('src', element.strDrinkThumb)

        const p = document.createElement('p');
        p.innerText = element.strInstructions;

        const ingridients = document.createElement('ul');
        for (let i = 0; i < 15; i++) {
            const li = document.createElement('li')
            const ingredient = element[`strIngredient${i}`]
            const measure = element[`strMeasure${i}`];
            if (ingredient && measure) {
                li.innerText = `${ingredient}-${measure}`
                ingridients.append(li)
            }
            
        }
        div.append(h2, img, ingridients, p)
        div_recipe.append(div)
    });
    
}
form.onsubmit = async (e) => {
    e.preventDefault();
    const amount = input.value;
    try {
        const request = await fetcha(amount);
        fill_cocktail(request)
    } catch (e){
        console.error(e);
    }
}