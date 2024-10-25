import { useState } from "react";

export default function ScoreKeeper({numplayers=3, target=10}){
    const arr = new Array(numplayers).fill(0)
    const [scores, setScores] = useState(arr)
    // const incrementScore = (idx) =>{
    //     setScores(prevSocres => {
    //         const copy = [...prevSocres]
    //         copy[idx] +=1 
    //         return copy
    //     })
    // }
    const incrementScore = (idx) =>{
        setScores(prevSocres => {
            return prevSocres.map((score, i)=>{
                if(i === idx) return score + 1;
                return score;
            })
        })
    }
    const reset = () => {
        setScores(new Array(numplayers).fill(0))
    }
    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx)=>{
                    return (
                        <li key={idx}>
                            Player {idx+1} : {score}
                            <button onClick={() => incrementScore(idx)}>+ 1</button>
                            {score >= target && "Winner!"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


// export default function ScoreKeeper(){
//     const [scores, setScores] = useState({p1Score: 0, p2Score:0})
//     function increaseP1Score(){
//         //we dont mutate object in place
//         //we don't mutate arrays in the state
//         //insdead, we always make a COPYYYY!!!!! CALLBACK COPYYY!!!
//         setScores(oldScores =>{
//             return {...oldScores, p1Score: oldScores.p1Score + 1}
//         })
//     }
//     function increaseP2Score(){
//         setScores(oldScores =>{
//             return {...oldScores, p2Score: oldScores.p2Score + 1}
//         })
//     }
//     return(
//         <div>
            
//             <p>Player: 1: {scores.p1Score}</p>
//             <p>Player: 2: {scores.p2Score}</p>
//             <button onClick={increaseP1Score}>+1 Player 1</button>
//             <button onClick={increaseP2Score}>+1 Player 2</button>
//         </div>
//     )
// }