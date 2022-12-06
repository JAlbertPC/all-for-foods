import {getAllRecipesPort, getRecipeByIdPort} from "../ports/RecipesPort"

export const getAllRecipesController = () => {
    return getAllRecipesPort().then(response => {
        //if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const getRecipeByIdController = (recipeId) => {
    return getRecipeByIdPort(recipeId).then(recipes => {
        //if (recipes.status !== 200) return {error: "Algo salio mal"}
        return recipes.json()
    })
}

export const recetaRandom = (recipes) => {
    console.log(recipes.length);
    const rndInt = randomIntFromInterval(1, recipes.length)
    window.location.href = "/Recipe/"+rndInt;
}

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

