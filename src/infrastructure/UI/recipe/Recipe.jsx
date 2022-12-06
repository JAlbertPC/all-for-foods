import React from "react";
import {Box, TextField} from "@mui/material";
import '../CSS/Recipe.style.css';

const portions = 4

function Recipe() {
    return (
        <div className="recipe recipe-card">
            <div className="dish-img">
                <Box sx={{
                    width: '80vw',
                    height: '30vh',
                }} className="information-recipe-card">Title:  Author: {portions}</Box>
            </div>
            <div className="parts">
                <div className="left">
                    <Box label="Portions" sx={{
                        width: '20vw',
                        height: '7vh',
                    }}><TextField sx={{borderStyle: 'none'}}
                                  label="Portions"
                                  defaultValue={portions}
                                  InputProps={{
                                      readOnly: true,
                                  }}
                    /></Box>
                    <Box label="Ingredients" sx={{backgroundColor: '#9f9f9f'}}>
                        <TextField sx={{borderStyle: 'none'}}
                                   label="Ingredients"
                                   defaultValue={portions}
                                   InputProps={{
                                       readOnly: true,
                                   }}
                        /></Box>
                </div>
                <div className="right">
                    <Box label="Steps" sx={{
                        width: '65vw',
                    }}><TextField sx={{marginLeft: '1vw', borderStyle: 'none'}}
                                  label="Steps" fullWidth="true"
                                  defaultValue={portions}
                                  InputProps={{
                                      readOnly: true,
                                  }}
                    /></Box>
                </div>
            </div>
        </div>
    )
}

export default Recipe;