import React from "react";
import { Box, TextField } from "@mui/material";
import '../CSS/Recipe.style.css';


const portions = 4

function Recipe() {
    return (
        <div className="recipe">
            <Box sx={{
                width: '80vw',
                height: '30vh',
            }}>
            </Box>
            <div className="parts">
                <div className="left">
                    <Box label="Portions" sx={{
                        width: '20vw',
                        height: '7vh',
                    }}><TextField label="Portions"
                        defaultValue={portions}
                        InputProps={{
                            readOnly: true,
                        }}
                        /></Box>
                    <Box label="Ingredients" sx={{ backgroundColor: '#9f9f9f' }}>
                        <TextField label="Ingredients"
                            defaultValue={portions}
                            InputProps={{
                                readOnly: true,
                            }}
                        /></Box>
                </div>
                <div className="right">
                    <Box label="Steps" sx={{
                        width: '65vw',
                    }}><TextField label="Steps" fullWidth="true" sx={{marginLeft:'1vw'}}
                        defaultValue={portions}
                        InputProps={{
                            readOnly: true,
                        }}
                        /></Box>
                </div>
            </div>
        </div >
    )
}
export default Recipe;