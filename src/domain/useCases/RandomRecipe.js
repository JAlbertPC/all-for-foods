export const recetaRandom = (recipes) => {
    console.log(recipes.length);
    const rndInt = randomIntFromInterval(1, recipes.length)
    window.location.href = "/Recipe/"+rndInt;
}

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

