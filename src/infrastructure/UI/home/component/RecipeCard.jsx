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

export const RecipeCard = ({RecipeId, Title, Description, ImageUrl, Score}) => {
    let Author = "Placeholder"
    return <Card sx={{maxWidth: 345}}>
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
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <Button size="small" href="/Recipe">Learn More</Button>
            </CardActions>
        </Card>

}

RecipeCard.prototype = {
    RecipeId: PropTypes.number,
    Title: PropTypes.string,
    Description: PropTypes.string,
    ImageUrl: PropTypes.string,
    Score: PropTypes.number

}