import Rating from '@mui/material/Rating';
import { useState } from 'react';
export default function RatingDemo() {
    const [value, setValue] = useState(3)
    return (
        <div>
            <h1>Rating Demo.   Current Rating: {value}</h1>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}