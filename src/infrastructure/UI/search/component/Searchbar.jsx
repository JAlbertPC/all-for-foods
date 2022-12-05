import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
//TODO: hacer que pueda distinguir entre busqueda de ingrediente y de titulo de receta
import { Ingredients } from '../../../../testing/data/Ingredients';
/* import { Recipes } from '../../../../testing/data/Recipes'; */

export default function Searchbar() {
    return (
        <Autocomplete
            freeSolo
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={Ingredients}
            getOptionLabel={(option) => option.Name}
            renderInput={(params) => (
                <TextField {...params} label="Search" placeholder="Search" />
            )}
            sx={{ width: '20vw' }}
        />
    );
}