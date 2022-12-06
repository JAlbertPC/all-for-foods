const apiURL = "http://localhost:8050/api/Searcher"

export const searchRecipeByTitlePort = (title) => {
    return fetch(`${apiURL}/?title=${title}`,{method:"GET"})
}

export const serchRecipeByIngredientsPort = (ingredientsIds) => {
    return fetch(`${apiURL}/${ingredientsIds}`, {method: "GET"})
}
