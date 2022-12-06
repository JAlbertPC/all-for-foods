import {searchRecipeByTitlePort} from "../ports/SearchPort";

export const searchRecipeByTitle = (title) =>{
    return searchRecipeByTitlePort(title).then((response) => {
        return response.json()
    })
}

/*
export const searchRecipeByIngredients = (ingredients) => {
    let ingredientsIds = ""
    for (const ingredient of ingredients) {
        in
    }
}*/
