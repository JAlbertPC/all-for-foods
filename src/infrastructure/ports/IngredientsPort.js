const apiURL = "http://localhost:8050/api/Ingredient"
export const ingredientsGetAllPort = () => {
    return fetch(`${apiURL}`, {
        method: "GET"
    })
}