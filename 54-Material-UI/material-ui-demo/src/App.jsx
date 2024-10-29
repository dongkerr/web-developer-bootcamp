import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar'

function App() {

  return (
    <>
      {/* <Button variant="contained" onClick={() => { alert("hi!") }}>Contained</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color='success' onClick={() => { alert("hi!") }}>Contained</Button>
      <Button variant="contained" color='secondary' size='small' onClick={() => { alert("hi!") }}>Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
      {/* <RatingDemo/> */}
      <Navbar/>
      <FormDemo/>
      
    </>
  )
}

export default App
