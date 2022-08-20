import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import useFetchData from "./useFetchData";
const BlogDetails = () => {
   
    const [isPending, setIsPending] = useState(false);
    //useParamss is used to detect whatever parameters are in the url
    const {id} = useParams();
    const { data: blog, isLoading, error} = useFetchData(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    
    const handleDelete = () => {

        
        setIsPending(true);

        fetch(`http://localhost:8000/blogs/${id}`, {method: 'DELETE'})
            .then(() => {
                console.warn('Deleted blog successfully');
                setTimeout(() => {
                    setIsPending(false);
                }, 1500);
               
                setTimeout(() => {
                    history.push('/');
                }, 2000);
               
            })
    }
    
    return (
        
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: 404 not found</div>}
            {blog && (
                <article>
                     <h2>Blog Details - { id }</h2>
                     <h3>Title: {blog.title}</h3>
                     <p>Written By: {blog.author}</p>
                     <div id="blog-body">{blog.body}</div>
                </article>
            )}
            {!isPending && <button onClick={handleDelete}>Delete</button>}
            {isPending && <button disabled>Deleting Blog...</button>}
        </div>
      );
}
 
export default BlogDetails;