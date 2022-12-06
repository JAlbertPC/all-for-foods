import React, {useCallback, useState} from "react";
import {Box, TextField} from "@mui/material";
import '../CSS/TextWriter.style.css';

function TextEditor() {
    return (
        <div className="Editor-container">
            <Box sx={{width: '80vw', maxWidth: '100%', }} id="titleBox">
                <TextField fullWidth id="titleField" label="Title"></TextField>
            </Box>
            <Box sx={{width: '40vw', maxWidth: '100%', }} id="ingredientsBox">
                <TextField fullWidth id="titleField" label="Ingredients"></TextField>
            </Box>
            <Box sx={{width: '40vw', maxWidth: '100%', }} id="quantityBox">
                <TextField fullWidth id="titleField" label="How many?"></TextField>
            </Box>
        </div>
    )
}

export default TextEditor;