import { useState } from "react"
export default function BetterSignupForm(){
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: ""
    })

    const handleChange = (evt) =>{
        const changeField = evt.target.name
        const newValue = evt.target.value
        setFormData(currData =>{
            // currData[changeField] = newValue
            // return {...currData}
            return{
                ...currData,
                [changeField]: newValue
            }
        })
    }
    
    const handleSubmit = () =>{
        console.log(formData)
    }
    return(
        <div>
            <label htmlFor="firstname">Firstname: </label>
            <input
                type="text" 
                placeholder="Firstname" 
                value={formData.firstName} 
                onChange={handleChange}
                id="firstname"
                name="firstName"
            />
            <label htmlFor="lastname">Lastname: </label>
            <input
                type="text" 
                placeholder="Lastname" 
                value={formData.lastName} 
                onChange={handleChange}
                id="lastname"
                name="lastName"
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange}
                id="password"
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}