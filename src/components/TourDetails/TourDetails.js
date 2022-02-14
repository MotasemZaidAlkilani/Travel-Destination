import {useParams} from "react-router-dom";
import "./TourDetails.css";
function TourDetails(props){

  
const { id}=useParams();
return(
<>
{props.data.filter((val)=>val.id===id)
  .map((val)=>(
      
<div className="content_details" key={val.id}>
  <p>Name: {val.name}</p>
  <img src={val.image} alt={val.name}/>
  <p>Info :{val.info}</p>
  <p>Price :{val.price}</p>
</div>
  ))}
  


</>

);

}
export default TourDetails;