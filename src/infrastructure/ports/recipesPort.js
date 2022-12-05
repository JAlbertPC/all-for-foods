const baseURL = "http://localhost:8050/api/Recipe"

export const getRecipeByIdPort = async (recipeId) => {
    return await fetch(`${baseURL}/${recipeId}`, {method: "GET"})
}

export const getAllRecipesPort = async () => {
    return await fetch(baseURL, {method: "GET"})
}