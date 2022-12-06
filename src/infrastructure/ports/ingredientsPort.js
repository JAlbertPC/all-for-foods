const apiURL = "http://localhost:8050/api"
export const ingredientsGetAllPort = () => {
    return fetch(`${apiURL}/Ingredient`, {
        method: "GET"
    })
}