import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./component/RecipeCardsList.home";
import Welcomebanner from "./component/Welcomebanner";
import Sharebanner from "./component/Sharerecipebanner";
import '../CSS/Home.style.css';
import {Button, Typography} from "@mui/material";
import {getAllRecipesController} from "../../controllers/recipesController";
import {loginUserController} from "../../controllers/loginController";
import {recetaRandom} from "../../../domain/useCases/randomRecipe";

function Home() {

    const [recipes, setRecipes] = useState(null)



    useEffect(() => {
        getAllRecipesController().then(response => {
            setRecipes(response)
        })
    }, [recipes])

    return (
        <div>
            <div className="banners">
                <Welcomebanner />
                <Sharebanner />
            </div>
            <div className='div-banner bottom-section-spacing'>
                <Typography variant='h4' >
                    Don&apos;t know what to cook?
                </Typography>
                <Typography variant='h6'>
                    Don&apos;t worry, leave it to us!
                </Typography>
            </div>
            <Button  sx={{ bgcolor: '#efd6a7', color:'#5D737E'}} variant="contained" className="small-top-spacing" on) >Show me a random recipe</Button>
            <RecipeReviewCard recipes={recipes}/>
        </div>
    )
}
export default Home;