import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

//how to create vite
//npm create vite
//npm install
//npm run dev


function App() {
  
  return (
    <>
      <ScoreKeeper numplayers={9} target={7}/>
      {/* <h1>State Demo!</h1> */}
      {/* <Counter/>
      <Dumbo/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
    </>
  )
}

export default App
