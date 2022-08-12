//stateless functional component(sfc)
const BlogList = ({blogs, title}) => {

const useableBlogs = blogs.map(blog => (
    <div className="blogs-list" key={blog.id}>
        <h3 style={{
                    color: "orange",
                    fontSize: "2rem"
                                    }}>{blog.title}</h3>
        <span>Written by: {blog.author}</span>
        <section id="blog-details">{blog.body}</section>
       
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