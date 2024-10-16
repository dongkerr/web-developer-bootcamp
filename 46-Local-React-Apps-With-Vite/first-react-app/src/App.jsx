import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
  return (
    <div>
      <Slots val1 = "🍒" val2 = "🍌" val3 = "🍒" />
      <Heading color="magenta" text="welcome!" fontSize = "20px" />
      <Heading color="teal" text="blah" fontSize = "48px" />
      {/* <Greeter person="Bill" from="Keke"/>
      <Greeter person="Sandro" />
      <Greeter  from="Keke"/>
      <Die numSides={20}/>
      <Die />
      <Die numSides={10}/>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a", "b", "c"]}/>
      <ListPicker values={["a", "b", "c"]}/> */}
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>

      <ColorList colors={["red", "pink", "purple", "teal"]}/>
      <ColorList colors={["olive", "orange", "slategrey"]}/>

    </div>
  )
}

export default App
