import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import { Button, IconButton, Avatar, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
//cambiar el test
import { Recipes } from '../../../../testing/data/Recipes';
import '../../CSS/RecipeCard.css';


export default function RecipeReviewCard() {
    return (
        <div className="top-spacing-section" >

            <Grid sx={{ justifyContent: 'space-around'}} container className="top-spacing-section botton-spacing-section">
                {Recipes.map(recipeInfo => {
                    return <>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar alt={recipeInfo.Author} src="/static/images/avatar/2.jpg" />
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
                                    <FavoriteIcon />
                                </IconButton>
                                <Button size="small" href="/Recipe">Learn More</Button>
                            </CardActions>
                        </Card>
                    </>
                })}
            </Grid>
        </div>
    );
}
