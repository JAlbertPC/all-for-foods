import {getAllRecipesPort} from "../ports/recipesPort"

export const getAllRecipesController = () => {
    return getAllRecipesPort().then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const getRecipeByIdController = () => {
    getAllRecipesPort().then(recipes => {
        console.log(recipes)
    })
}