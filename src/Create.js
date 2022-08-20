import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Aaron');

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>


            <form action="">
            <label>Blog Title: </label>
            <input
                type="text" 
                value={title}
                onChange={(e) => {
                    console.log("Recording Input data")
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
            <button>Add Blog</button>
            </form>

         
           <p className="description">Title Input: 
           <span>{title}</span></p>

           <p className="description">Body Input: 
           <span> {body}</span></p>
           
           <p className="description">Author: 
           <span>{author}</span></p>
        </div>
    );
}
 
export default Create;
