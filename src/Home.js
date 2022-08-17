import { useState, useEffect } from 'react';
import BlogList from './BlogList';
//stateless functional component(sfc)
const Home = () => {
    //blogs array state
    const [blogsArray, setBlogs] = useState(null);

    //loading state 
    const [isPending, setisPending] = useState(true);

    //error state
    const [error, setError] = useState(null);

    //useEffect runs code after every render
    useEffect(() => {
        //.simulates the time it takes to receive data
      setTimeout(() =>{
          //fetches a blog list from a json file
          fetch("http://localhost:8000/blogs")
          //if the fetch is a success, it returns the json data
              .then(response => {

                
                if(response.ok)
                    console.log("RESOURCE FETCHED!");
                else if(!response.ok) 
                    {
                    console.log(response);
                    throw Error("SERVER ERROR: 404 Not Found");
                    
                    }
                    return response.json()
              })
  
              //white processing, it changes the state of the blog from null and sets pending to false
          .then(data => {
            //setting blogs from null array to everything within the api json file
                setBlogs(data)
              setisPending(false)
              setError(null)

          })
          .catch(err => {
            setError(err.message)
            setisPending(false);
            console.log(err.message)
          })
      }, 1000)
    }, []);
  
    return (  
<div className="home">
    {error && <div>{ error }</div>}
    {/*if isPending is true, then return a loading message*/}
    {isPending && <div>LOADING...</div>}
{blogsArray && <BlogList blogs={blogsArray.filter(blog => blog.author === 'yoshi')} title="Yoshi's Blog"/>}

</div>
        
        ); 
}

export default Home;
//taskkill -F -IM node.exe (terminates node server)

/*WATCHES DATA ON SERVER
npx json-server --watch data/db.json --port 8000
*/