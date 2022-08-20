import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Aaron');
    const [isLoading, setIsLoading] = useState(false);
    const [h2, seth2] = useState('Add a New Blog');
    const history = useHistory();
    const handleSubmit = e =>{
        //prevent web app from reloading
        e.preventDefault();

        const blog = { title, body, author};

        setIsLoading(true)
      

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() =>{ 
            setTimeout(() => {
                setIsLoading(false); 
                seth2('Blog Posted!')
            }, 1000);
           
            setTimeout(() => {
                seth2('Add a New Blog')
           }, 5000);


           setTimeout(() => {
            //history.go(-1) redirects the user back 1 or more pages
            history.push('/');//redirects the user to the home page
            console.log('Sent user back to home page');
        }, 5500);
            console.log(`Created ${blog.title} Blog`)

        });

        

    }

    return (  
        <div className="create">
            <h2>{h2}</h2>


            <form onSubmit={handleSubmit}>
            <label>Blog Title: </label>
            <input
                type="text" 
                value={title}
                onChange={(e) => {
                    console.log("Recording Blog Title Input data")
                    setTitle(e.target.value);    
                }}
                required/>
                
            <label >Blog Body:</label>
            <textarea 
             cols="30" 
             rows="10"
             onChange={(e) => {
                console.log('Recording Body Input Data');
                setBody(e.target.value)

             }} 
             required></textarea>
            
            <label>Blog Author</label>
            <select 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}>
                <option value="Aaron">Aaron</option>
                <option value="Hazzard">Hazzard</option> 
            </select>
            {!isLoading && <button>Add Blog</button>}
           {isLoading && <button className="btn-disabled" disabled>Adding Blog...</button>}
          

            </form>

         <div>
         <p className="description">Title Input: 
           <span>{title}</span></p>

           <p className="description">Body Input: 
           <span> {body}</span></p>
           
           <p className="description">Author: 
           <span>{author}</span></p>
         </div>
        
        </div>
    );
}
 
export default Create;
