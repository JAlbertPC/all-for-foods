import React from "react";
import {Box, TextField, Button} from "@mui/material";
import '../CSS/TextWriter.style.css';

function TextEditor() {
    return (
        <div className="Editor-container">
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="titleBox">
                <TextField fullWidth id="titleField" label="Title" type="text"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="descriptionBox">
                <TextField fullWidth id="descriptionField" label="What's your recipe about?" type="text"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="ingredientsBox">
                <TextField fullWidth id="ingredientsField" label="Ingredients"
                           placeholder="Please write your ingredients like: ingredient_1, amount_1; ingredient_2, amount_2 " type="text"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%', height: '35vh',}} id="stepsBox">
                <TextField fullWidth multiline rows={9} id="stepsField" label="How do you make it?" type="text"/>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="titleBox">
                {/*Functionality onClick={{FunctionNameToSend}}*/}
                <Button type="submit" sx={{color: '#1e1e1e', bgcolor: '#efd6a7', mt: '2vh'}}>Send it!</Button>
            </Box>
        </div>
    )
}

export default TextEditor;