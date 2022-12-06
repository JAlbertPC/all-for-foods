import {writerCreateRecipePort} from "../ports/WriterPort";

export const writerCreateRecipeController = (newRecipe) => {
    return writerCreateRecipePort(newRecipe).then(response => {
        return response.json()
    })
}

export const writerEditRecipe = (userId, editRecipe) => {
    return writerEditRecipe(userId, editRecipe).then(response =>{
        return response.json()
    })
}