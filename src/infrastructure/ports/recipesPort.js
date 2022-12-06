const baseURL = "http://localhost:8050/api/Recipe"

export const getRecipeByIdPort = (recipeId) => {
    return fetch(`${baseURL}/${recipeId}`, {method: "GET"})
}

export const getAllRecipesPort = () => {
    return fetch(baseURL, {method: "GET"})
}