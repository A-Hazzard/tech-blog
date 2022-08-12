import { useState, useEffect } from 'react';
import BlogList from './BlogList';
//stateless functional component(sfc)
const Home = () => {
    const [blogsArray, setBlogs] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => {
                return response.json()
            })

        .then(data => {
         
            setBlogs(data)
        })
    }, []);
  
    return (  
<div className="home">
            
{blogsArray && <BlogList blogs={blogsArray.filter(blog => blog.author === 'yoshi')} title="Yoshi's Blog"/>}

</div>
        
        );
}

export default Home;