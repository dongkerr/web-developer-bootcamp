import Property from "./Property"
import "./PropertyList.css"
export default function PropertyList({properties}){
    return(
        <div className="PropertyList">
            {properties.map(i=>{
                return <Property key={i.id} {...i}/>
            })}
        </div>
    )
}