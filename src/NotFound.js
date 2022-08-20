import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div>
             <h2>404: PAGE NOT FOUND!</h2> 
             <Link to="/">Back to Home Page</Link>
        </div> 
       
    );
}
 
export default NotFound;