import React from "react";
import RecipeReviewCard from "./component/RecipeCardsList.search";
import Searchbar from "./component/Searchbar";
import '../CSS/Search.style.css';

export default function Search() {
    return (
        <div className="Search">
            <Searchbar />
            <RecipeReviewCard />
        </div>
    )
}