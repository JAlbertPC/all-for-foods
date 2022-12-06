import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./component/RecipeCardsList.search";
import Searchbar from "./component/Searchbar";
import '../CSS/Search.style.css';
import {Autocomplete, TextField} from "@mui/material";
import {Ingredients} from "../../../testing/data/Ingredients";
import {searchRecipeByTitle} from "../../controllers/SearchController";

export default function Search() {
    const [recipe, setRecipe] = useState("");
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        if (recipe != "") {
            searchRecipeByTitle(recipe).then(response => {
                setRecipes(response)
            })
        }
    }, [])

    return (
        <div className="Search">
            {/*<Autocomplete
                freeSolo
                multiple
                limitTags={2}
                id="search-tags"
                options={Ingredients}
                getOptionLabel={(option) => option.Name}
                renderInput={(params) => (

                )}
                sx={{width: '25vw'}}
            >
            </Autocomplete>*/}
            <TextField label="Search" placeholder="Search" onChange={(event) => {
                console.log(event.target.value)
                setRecipe(event.target.value)
            }}/>
            <RecipeReviewCard recipes={recipes}/>
        </div>
    )
}