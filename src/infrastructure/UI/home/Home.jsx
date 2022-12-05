import React from "react";
import RecipeReviewCard from "../globalComponents/RecipeCardsList";
import Welcomebanner from "./component/Welcomebanner";
import Sharebanner from "./component/Sharerecipebanner";
import '../CSS/Home.style.css';

function Home() {
    return (
        <div>
            <div className="banners">
                <Welcomebanner />
                <Sharebanner />
            </div>
            <RecipeReviewCard />
        </div>
    )
}
export default Home;