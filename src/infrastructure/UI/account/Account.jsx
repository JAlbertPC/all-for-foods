import React, {useState} from "react";
import {Box, TextField, Button} from "@mui/material";
import {UserEditUserController} from "../../controllers/UserController";
import '../CSS/Account.style.css';

export default function Account() {
    const [userNewName, setUserNewName] = useState(null)
    const [userNewEmail, setUserNewEmail] = useState(null)
    const [userNewPassword, setUserNewpassword] = useState(null)

    const edit = () => {
        let userId = sessionStorage.getItem("id")
        UserEditUserController(userId, userNewName, userNewEmail, userNewPassword).then(response => {
            console.log("Info changed successfully", response)
        })
    }

    return (
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
                <TextField fullWidth id="EmailField" label="NewEmail" type="email" onChange={(event) =>{
                    setUserNewEmail(event.target.value)
                }}></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="PasswordBox">
                <TextField fullWidth id="PasswordField" label="NewPassword" type="password" onChange = {(event) =>{
                    setUserNewpassword(event.target.value)
                }}></TextField>
            </Box>
            <Box sx={{width: '80vw', maxWidth: '100%',}} id="titleBox">
                <Button type="submit" sx={{color: '#1e1e1e', bgcolor: '#efd6a7', mt: '2vh'}}
                        onSubmit={edit}>Update</Button>
            </Box>
        </div>
    )
}