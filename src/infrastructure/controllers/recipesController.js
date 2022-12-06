import {getAllRecipesPort, getRecipeByIdPort} from "../ports/recipesPort"

export const getAllRecipesController = () => {
    return getAllRecipesPort().then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const getRecipeByIdController = (recipeId) => {
    return getRecipeByIdPort(recipeId).then(recipes => {
        console.log(recipes)
    })
}