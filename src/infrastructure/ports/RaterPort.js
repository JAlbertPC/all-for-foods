const apiURL = "http://localhost:8050/api/Rater"

export const rateRecipePort = (userId, RecipeId, score) => {
    return fetch(`${apiURL}`, {
        method: "POST",
        body: JSON.stringify({
            "userId": userId,
            "RecipeId": RecipeId,
            "score": score
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}