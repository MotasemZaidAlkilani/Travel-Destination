function Tours(props){
    return(
        <>
       {props.data.map(obj=>{
           return(
        <div>
            
        <p>Name: {obj.name}</p>
        <img src={obj.image} alt={obj.name}/>
        </div>
           );
        })}
        </>
    );
}
export default Tours;