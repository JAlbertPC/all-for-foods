import {rateRecipePort} from "../ports/RaterPort";

export const rateARecipeController = (userId, RecipeId, score) => {
    return rateRecipePort(userId, RecipeId, score).then((response) => {
        return response.json()
    })
}