import {getAllRecipesPort, getRecipeByIdPort} from "../ports/RecipesPort"

export const getAllRecipesController = () => {
    return getAllRecipesPort().then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const getRecipeByIdController = (recipeId) => {
    return getRecipeByIdPort(recipeId).then(recipes => {
        if (recipes.status !== 200) return {error: "Algo salio mal"}
        return recipes.json()
    })
}