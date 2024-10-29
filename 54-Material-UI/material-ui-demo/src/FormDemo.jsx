import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
export default function FormDemo() {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(23)
    const updateName = (e) => {
        setName(e.target.value)
    }
    const changeVolume = (e, newVal) => {
        setVolume(newVal)
    }
    return (
        <Box sx={{ border: "1px solid red", p:6, 
            width:300, height:300, margin:"0 auto"
         }}>
            <div>
                <h1>Name is: {name}</h1>
                <TextField
                    id="outlined-basic"
                    placeholder='Fido'
                    label="Puppy Name"
                    variant="outlined"
                    value={name}
                    onChange={updateName}
                />
                <h2>Volume: {volume}</h2>
                <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
            </div>
        </Box>
    )
}