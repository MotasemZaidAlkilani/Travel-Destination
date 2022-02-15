import {useParams} from "react-router-dom";
import {useState} from 'react';
import "./TourDetails.css";
function TourDetails(props){
const [isReadMore,setReadMore]=useState(false);
const { id}=useParams();

return(
<>
{props.data.filter((val)=>val.id===id)
  .map((val)=>(
      
<div className="content_details" key={val.id}>
  <p>Name: {val.name}</p>
  <img src={val.image} alt={val.name}/>
  <p>{isReadMore
     ?`Describtion : ${val.info}`
     :`Describtion :${val.info.substring(0,552)}`
    
    }
  <button onClick={()=>setReadMore(!isReadMore)}>
    {isReadMore
    ?"show less"
    :"show More"

    }
  </button>
  </p>
  <p>Price :{val.price}</p>
</div>
  ))}
  


</>

);

}
export default TourDetails;