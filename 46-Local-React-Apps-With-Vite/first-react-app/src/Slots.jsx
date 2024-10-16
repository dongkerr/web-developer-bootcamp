
export default function Slots({val1, val2, val3}){
    const iswinner = val1===val2 && val1===val3
    const styles = {color: iswinner ? "green" : "red"}
    return(
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={styles}>{iswinner ? "You Won!" : "You Lost!"}</h2>
            {/* {iswinner ? <h2 style={styles}> You Won!</h2> : <h2 style={styles}> You Lost!</h2>} */}
            {iswinner && <h3>Congrats!</h3>}
        </div>
    )
}