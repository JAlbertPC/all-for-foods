import React, {useState} from 'react';
import { Container, Box, Button, Typography, TextField } from '@mui/material';
import Popup from 'reactjs-popup';
import '../../CSS/Popup.css';
import {loginUserController} from "../../../controllers/loginController";

function Sharebanner() {
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
        })
    }

    return (
        <Container maxWidth="xl" >
            <Box sx={{
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: '15vh',
                mx: 'auto',
                typography: 'body1',
                width: '45vw',
                height: 400,
                bgcolor: '#00000059'
            }}>
                <Typography variant="h6" sx={{
                    color: '#FFFFFF',
                }}>
                    Share your
                </Typography>
                <Typography variant="h4" sx={{
                    color: '#FFFFFF',
                }}>
                    Recipies!
                </Typography>
                <Typography sx={{ lineHeight: 3, color: '#FFFFFF', }}>
                    Log in to share your flavour with the community!
                </Typography>
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
                            <div className="header"> Log in </div>
                            <div className="content">
                                {' '}
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, }
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="email" type="email" color="secondary" focused  onChange={handleEmailTextField}/>
                                </Box>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Password" autocomplete="off" type="password" color="secondary" focused onChange={handlePasswordTextField}/>
                                </Box>
                            </div>
                            <div className="actions">
                                <Button type="submit" className="button login-button" onClick={login}> Login </Button>
                                {/*<Popup
                                    trigger={}
                                    position="top center"
                                    nested
                                >
                                    <span>
                                        This should redirect to a loged in landing page
                                    </span>
                                </Popup>*/}
                            </div>
                        </div>
                    )}
                </Popup>
                {/* Sign in popup */}
                <Popup
                    trigger={<Button>¿No tienes cuenta? Regístrate</Button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"> Sign in </div>
                            <div className="content">
                                {' '}
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Name" color="secondary" focused />
                                </Box>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="email" type="email" color="secondary" focused />
                                </Box>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Password" autocomplete="off" type="password" color="secondary" focused />
                                </Box>
                            </div>
                            <div className="actions">
                                <Popup
                                    trigger={<Button type="submit" className="button login-button"> Sign in </Button>}
                                    position="top center"
                                    nested
                                >
                                    <span>
                                        This should redirect to a loged in landing page
                                    </span>
                                </Popup>
                            </div>
                        </div>
                    )}
                </Popup>
            </Box>
        </Container >
    )
}
export default Sharebanner;