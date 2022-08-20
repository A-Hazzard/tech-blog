import {Link} from 'react-router-dom';
//stateless functional component(sfc)
const BlogList = ({blogs, title}) => {

const useableBlogs = blogs.map(blog => (
    <div className="blogs-preview" key={blog.id}>
     <Link to={`/blogs/${blog.id}`}>
     <h3 style={{
                    color: "orange",
                    fontSize: "2rem"
                                    }}>{blog.title}</h3>
        <span>Written by: {blog.author}</span>   
        </Link>
       
    
    </div>
    
))
    return ( 
      <div className="blogs">
        <h2>{ title }</h2>
        { useableBlogs}
      </div>
     );
}
 
export default BlogList;