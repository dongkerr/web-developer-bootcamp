import { useState } from "react"
export default function SignupForm(){
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const updateFirstname = (evt) =>{
        setFirstname(evt.target.value)
    }
    const updateLastname = (evt) =>{
        setLastname(evt.target.value)
    }
    const handleSubmit = () =>{
        console.log(firstName, lastName)
    }
    return(
        <div>
            <label htmlFor="Firstname">Firstname: </label>
            <input
                type="text" 
                placeholder="Firstname" 
                value={firstName} 
                onChange={updateFirstname}
                id="firstname"
            />
            <label htmlFor="Lastname">Lastname: </label>
            <input
                type="text" 
                placeholder="Lastname" 
                value={lastName} 
                onChange={updateLastname}
                id="lastname"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}