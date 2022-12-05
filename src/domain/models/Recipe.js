export class Recipe {
    #recipeId
    #recipeTitle
    #recipeDescrip
    #recipeIng
    #portions
    #steps
    #recipeScore
    #recipeAuthor
    
    constructor(recipeId, recipeTitle, recipeDescrip, recipeIng, portions, steps, recipeScore, recipeAuthor) {
        this.#recipeId = recipeId
        this.#recipeTitle = recipeTitle
        this.#recipeDescrip = recipeDescrip
        this.#recipeIng = recipeIng
        this.#portions = portions
        this.#steps = steps
        this.#recipeScore = recipeScore
        this.#recipeAuthor = recipeAuthor
    }

    addIngredients(ingredients){
        this.#recipeIng.unshift(ingredients)
    }

    addRecipeTitle(title){
        this.#recipeTitle = title 
    }
    
    addRecipeDescrip(descrip){
        this.#recipeDescrip = descrip
    }

}