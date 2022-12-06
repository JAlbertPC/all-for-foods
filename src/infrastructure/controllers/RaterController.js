import {rateRecipePort} from "../ports/RaterPort";

export const rateARecipeController = (userId, RecipeId, score) => {
    return rateRecipePort(userId, RacipeId, score).then()
}