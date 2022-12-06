import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import PropTypes from "prop-types";
import HoverRating from "./RecipeRating";

export const RecipeCard = ({recipe}) => {
    const {RecipeId, Title, Description, ImageUrl, Score} = recipe
    console.log(recipe)
    let Author = "Placeholder"

    return <Card sx={{maxWidth: 345, width:'18vw'}}  id={RecipeId}>
        <CardHeader
            avatar={
                <Avatar alt={Author} src="/static/images/avatar/2.jpg"/>
            }
            title={Title}
        />
        <CardMedia
            component="img"
            height="194"
            image={ImageUrl}
            alt={Title}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {Description}
            </Typography>
        </CardContent>
        <CardContent>
            {/*<HoverRating ratingVal={Score}/>*/}
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <Button size="small" href="/Recipe">Learn More</Button>
        </CardActions>
    </Card>
}

RecipeCard.prototype = {
    recipe: PropTypes.object
}