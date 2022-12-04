import React from 'react';
import { Container, Box, Button, Typography } from '@mui/material';

function Banner() {
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
                width: '50vw',
                height: 400,
                bgcolor: '#00000059'
            }}>
                <Typography variant="h6">
                    ¡Pongamonos a
                </Typography>
                <Typography variant="h4">
                    Cocinar!
                </Typography>
                <Typography sx={{ lineHeight: 3 }}>
                    Consigue recetas sin preocuparte por los ingredientes que te falten
                </Typography>
                <Button variant="outlined" sx={{
                    borderColor: '#CCE7CD45',
                    bgcolor: '#261D1DBF',
                    color: '#FFFFFF',
                }}>Lista tus ingredientes</Button>
            </Box>
        </Container >
    )
}
export default Banner;