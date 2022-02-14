import "./Tours.css";
import Tour from "./tour/Tour";
function Tours(props){
    return(
        <>
        <div className="content">
       {props.data.map((obj)=>{
           return(
        <Tour name={obj.name} 
        image={obj.image} id={obj.id}/>
           );
        })}
        </div>
        </>
    );
}
export default Tours;