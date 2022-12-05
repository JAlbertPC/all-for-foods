import {getAllRecipesPort} from "../ports/recipesPort"

export const getAllRecipesController = async () => {
    /*return getAllRecipesPort().then(response => {
        console.log(response.status)
        if (response.status != 200) return "Algo salió mal"
        return response.json()
    }).then(response => response)*/
    const response = await getAllRecipesPort()
    if (response.status != 200) return "Algo salió mal"
    return await response.json()
    // return what will be draw... maybe
}

export const getRecipeByIdController = () => {
    getAllRecipesPort().then(recipes => {
        console.log(recipes)
    })
}