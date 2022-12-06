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

function Account(){
    return(
        <div className="Account-container">
            <Box>
                <h2>Change your account&apos;s setting</h2>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="NameBox">
                <TextField fullWidth id="NameField" label="NewName" type="text" onChange={(event) => {
                    setUserNewName(event.target.value)
                }}></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="EmailBox">
                <TextField fullWidth id="EmailField" label="NewEmail" type="email"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="PasswordBox">
                <TextField fullWidth id="PasswordField" label="NewPassword" type="password"></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="titleBox">
                {/*Functionality onClick={{FunctionUpdate}}*/}
                <Button type="submit" sx={{color: '#1e1e1e', bgcolor: '#efd6a7', mt: '2vh'}}>Update</Button>
            </Box>
        </div>
    )
}
export default Account;