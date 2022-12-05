import React from "react";
import RecipeReviewCard from "./component/RecipeCardsList.home";
import Welcomebanner from "./component/Welcomebanner";
import Sharebanner from "./component/Sharerecipebanner";
import '../CSS/Home.style.css';
import {Button, Typography} from "@mui/material";

function Home() {
    return (
        <div>
            <div className="banners">
                <Welcomebanner />
                <Sharebanner />
            </div>
            <div className='div-banner bottom-section-spacing'>
                <Typography variant='h4' >
                    Don&apos;t know what to cook?
                </Typography>
                <Typography variant='h6'>
                    Don&apos;t worry, leave it to us!
                </Typography>
            </div>
            <Button  sx={{ bgcolor: '#efd6a7'}} variant="contained" className="small-top-spacing">Show me a random recipe</Button>
            <RecipeReviewCard />
        </div>
    )
}
export default Home;