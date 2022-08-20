import {Link} from 'react-router-dom'
const Navbar = () => {
    return (  
      
<nav className="navbar">

    <h1>The tech blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/stores">Stores</Link>
            <Link to="/create">Create blog</Link>
            <Link to="/about">About</Link> 
        </div>
        
</nav>
  
    );
}
 
export default Navbar;