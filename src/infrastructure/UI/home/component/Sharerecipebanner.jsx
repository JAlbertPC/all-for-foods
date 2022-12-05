import React from 'react';
import { Container, Box, Button, Typography, TextField, Link } from '@mui/material';
import Popup from 'reactjs-popup';
import '../../CSS/SigninPopup.css';

function Sharebanner() {
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
                <Typography sx={{ lineHeight: 3 ,color: '#FFFFFF',}}>
                    Log in to share your flavour with the community!
                </Typography>
                <Button variant="outlined" sx={{
                    borderColor: '#CCE7CD45',
                    bgcolor: '#261D1DBF',
                    color: '#FFFFFF',
                }}>Login</Button>
                <Typography sx={{ lineHeight: 3, color: '#FFFFFF', }}>
                    or if you don&apos;t have an account
                </Typography>

                {/* Sign in popup */}
                <Popup
                    trigger={<Link>¿No tienes cuenta? Regístrate</Link>}
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
                                    <TextField label="email" color="secondary" focused />
                                </Box>
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Password" autocomplete="off" color="secondary" focused />
                                </Box>
                            </div>
                            <div className="actions">
                                <Popup
                                    trigger={<button className="button"> Sign in </button>}
                                    position="top center"
                                    nested
                                >
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
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