const apiURL = "http://localhost:8050/api/Writer"

export const writerCreateRecipePort = (newRecipe) => {
    return fetch(`${apiURL}`, {
        method: "POST",
        body: JSON.stringify(newRecipe),
        headers: {
            "Content-Type":"application/json"
        }
    })
}

export const writerEditRecipe = (userId, editedRecipe) => {
    return fetch(`${apiURL}/${userId}`, {
        method: "POST",
        body: JSON.stringify(editedRecipe),
        headers: {
            "Content-Type":"application/json"
        }
    })
}