import React, {useEffect} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from "prop-types";

export default function HoverRating({ratingVal}) {
    const [value, setValue] = React.useState(ratingVal);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}

HoverRating.prototype = {
    ratingValue: PropTypes.number
}