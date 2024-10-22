// function handleClick(){
//     console.log("CLicked the button")
// }

// function handleHover(){
//     console.log("hovered")
// }

// export default function Clicker(){
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Hover over me</p>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )


export default function Clicker({message, buttonText}){
    const handleClick = () =>{
        alert(message)
    }
    return <button onClick={handleClick}>{buttonText}</button>
}
