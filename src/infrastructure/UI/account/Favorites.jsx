import React from "react";
import {Box} from "@mui/material";
import "../CSS/Favorites.styles.css";

function Favorites() {
    return (
        <div className="Favorites-container">
            <Box sx={{width:'100%'}} label="Title"><h2>
                Here are your saved recipes!
            </h2></Box>
            <Box sx={{width:'100%'}} label="FavoriteGrid"></Box>
        </div>
    )
}

export default Favorites;