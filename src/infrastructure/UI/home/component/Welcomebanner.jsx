import React from 'react';
import { Container, Box, Button, Typography } from '@mui/material';

function Welcomebanner() {
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
                    Let&apos;s get
                </Typography>
                <Typography variant="h4" sx={{
                    color: '#FFFFFF',
                }}>
                    Cooking!
                </Typography>
                <Typography sx={{ lineHeight: 3 ,color: '#FFFFFF'}}>
                    Find recipies without worrying about the ingredients you&apos;re missing!
                </Typography>
                <Button variant="outlined" sx={{
                    borderColor: '#CCE7CD45',
                    bgcolor: '#261D1DBF',
                    color: '#FFFFFF',
                }}>List out your ingredients</Button>
            </Box>
        </Container >
    )
}
export default Welcomebanner;