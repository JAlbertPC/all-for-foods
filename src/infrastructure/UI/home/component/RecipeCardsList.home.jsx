import React, {useEffect, useState} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography} from '@mui/material';
import {Button, IconButton, Avatar} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../CSS/RecipeCard.css';
import PropTypes from 'prop-types';

import {getAllRecipesController} from "../../../controllers/recipesController";


export default function RecipeReviewCard({recipes}) {

    /*const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        getAllRecipesController().then(response => {
            console.log(response)
            setRecipes(response)
        })
    }, [])*/

    return recipes != null ? (
        <div className="top-spacing-section botton-spacing-section flex-section">
            <div className="flex-card">
                {recipes.map(recipeInfo => {
                    return <>
                        <Card sx={{maxWidth: 345}}>
                            <CardHeader
                                avatar={
                                    <Avatar alt={recipeInfo.Author} src="/static/images/avatar/2.jpg"/>
                                }
                                title={recipeInfo.Title}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={recipeInfo.ImageUrl}
                                alt={recipeInfo.Title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {recipeInfo.Description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <Button size="small" href="/Recipe">Learn More</Button>
                            </CardActions>
                        </Card>
                    </>
                })}
            </div>
        </div>
    ) : <h1>There was an error recollecting the recipes</h1>;
}

RecipeReviewCard.propTypes = {
    recipes : PropTypes.array
}
