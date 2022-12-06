import Popup from "reactjs-popup";
import {Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";
import '../CSS/Popup.css';
import {loginUserController} from "../../controllers/LoginController";

export default function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleEmailTextField = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordTextField = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        loginUserController(email, password).then(response => {
            sessionStorage.setItem("id", response.id)
            sessionStorage.setItem("username", response.username)
            console.log("bruh")
        })
    }
    return (
        <div>
            <Popup
                trigger={<Button variant="outlined" sx={{
                    borderColor: '#CCE7CD45',
                    bgcolor: '#261D1DBF',
                    color: '#FFFFFF',
                }}>Login</Button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Log in</div>
                        <div className="content">
                            {' '}
                            <Box component="form"
                                 sx={{
                                     '& > :not(style)': {m: 1,}
                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField label="email" type="email" color="secondary" focused
                                           onChange={handleEmailTextField}/>
                            </Box>
                            <Box component="form"
                                 sx={{
                                     '& > :not(style)': {m: 1,},
                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField label="Password" autoComplete="off" type="password" color="secondary" focused
                                           onChange={handlePasswordTextField}/>
                            </Box>
                        </div>
                        <div className="actions">
                            <Button type="submit" className="button login-button" onClick={login}> Login </Button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}
