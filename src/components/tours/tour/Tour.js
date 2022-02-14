import {Link} from "react-router-dom";
function Tour(props){
return(
<>
<div key={props.id}>
  <p>Name: {props.name}</p>
  <img src={props.image} alt={props.name}/>
  <Link to={`/city/${props.id}`} >more details</Link>
</div>
</>

);
}
export default Tour;