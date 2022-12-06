import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Login from "../../globalComponents/Loggin";
import SigninPopUp from "../component/SigninPopUp";

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
                <Typography sx={{ lineHeight: 3, color: '#FFFFFF', }}>
                    Log in to share your flavour with the community!
                </Typography>
                <Login />
                <SigninPopUp />
            </Box>
        </Container >
    )
}
export default Sharebanner;