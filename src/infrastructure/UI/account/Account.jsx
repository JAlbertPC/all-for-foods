import React from "react";
import {Box, TextField, Button} from "@mui/material";
import '../CSS/Account.style.css';

/*
export const userGetUser = (userId) => {
    return fetch(`${baseURL}/${userId}`).then(response => {
        console.log(response)
        console.log(response.status)
        return response.json()
    })
}
*/

function Account({}){
    return(
        <div className="Account-container">
            <TextField variant="h2">Change your account&apos;s setting</TextField>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="NameBox">
                <TextField fullWidth id="NameField" label="NewName" type="text"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="EmailBox">
                <TextField fullWidth id="EmailField" label="NewEmail" type="email"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="PasswordBox">
                <TextField fullWidth id="PasswordField" label="NewPassword" type="password"></TextField>
            </Box>

        </div>
    )
}
export default Account;