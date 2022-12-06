import Popup from "reactjs-popup";
import {Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";
import '../../CSS/Popup.css';
import {UserRegisterUser} from "../../../controllers/UserController";

export default function SigninPopUp() {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleUsernameTextField = (event) => {
        setUsername(event.target.value)
    }

    const handleEmailTextField = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordTextField = (event) => {
        setPassword(event.target.value)
    }

    const register = () => {
        UserRegisterUser(username, email, password).then(response => {
            console.log("user created successfully", response)
        })
    }

    return (
        <>
            <Popup
                trigger={<Button>Do not have an account? sign in</Button>}
                modal
                nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Sign in</div>
                        <div className="content">
                            {' '}
                            <Box component="form"
                                 sx={{
                                     '& > :not(style)': {m: 1,},
                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField label="Name" color="secondary" onChange={handleUsernameTextField} focused/>
                            </Box>
                            <Box component="form"
                                 sx={{
                                     '& > :not(style)': {m: 1,},
                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField label="email" type="email" color="secondary" onChange={handleEmailTextField} focused/>
                            </Box>
                            <Box component="form"
                                 sx={{
                                     '& > :not(style)': {m: 1,},
                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField label="Password" autoComplete="off" type="password" color="secondary"
                                           onChange={handlePasswordTextField} focused/>
                            </Box>
                        </div>
                        <div className="actions">
                            <Button type="submit" className="button login-button" onSubmit={register}> Sign in </Button>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}