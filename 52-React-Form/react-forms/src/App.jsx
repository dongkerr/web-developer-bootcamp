import { useState } from 'react'
import './App.css'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm'
import BetterSignupForm from './BetterSignupForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import FormDemo from './FormDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingList/>
      <h1>Validated Demo</h1>
      <FormDemo/>
      {/* <BetterSignupForm/> */}
    </>
  )
}

export default App
