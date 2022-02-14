import "./Header.css";
import {Link} from 'react-router-dom';
function Header(){
return(
<>
<div className="Header">
<Link to="/" className="link">Home</Link>    
<h1>The Header</h1>
</div>
</>
);

}

export default Header;