import "./Die.css"
export default function Die({val, color="pink"}){
    return <div className="Die" style={{backgroundColor: color}}>{val}</div>
}