import React from 'react';
import '../../CSS/RecipeCard.css';
import PropTypes from 'prop-types';
import {RecipeCard} from "../../globalComponents/RecipeCard";


export default function RecipeReviewCard({recipes}) {
    return recipes != null ? (
        <div className="top-spacing-section botton-spacing-section flex-section">
            <div className="flex-card">
                {recipes.map(recipeInfo => <RecipeCard recipe={recipeInfo}/>)}
            </div>
        </div>
    ) : <h1>There was an error recollecting the recipes</h1>;
}

RecipeReviewCard.propTypes = {
    recipes: PropTypes.array
}