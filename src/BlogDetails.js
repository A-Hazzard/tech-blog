import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData";
const BlogDetails = () => {
    //useParamss is used to detect whatever parameters are in the url
    const {id} = useParams();
    const { data: blog, error, isLoading} = useFetchData(`http://localhost:8000/blogs/${id}`);
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
        </div>
      );
}
 
export default BlogDetails;