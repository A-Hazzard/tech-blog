import { useEffect, useState} from 'react';

const useFetchData = url => {
           //blogs array state
           const [data, setBlogs] = useState(null);

           //loading state 
           const [isLoading, setisLoading] = useState(true);
       
           //error state
           const [error, setError] = useState(null);
       
           //useEffect runs code after every render
           useEffect(() => {

            const abortCont = new AbortController();

             console.log('-----------------\nDOM RENDERED!')
               //.simulates the time it takes to receive data
             setTimeout(() =>{
                 //fetches an API from another file
                 fetch(url, { signal: abortCont.signal } )
                 //if the fetch is a success, it returns the data
                     .then(response => {
                        //if the response if ok, output the response object
                       if(response.ok){
                         console.log("RESOURCE FETCHED!");
                         console.log(response);
                       }
                       //if the response is'nt ok, throw an error, providing that we have access the the site
                         else if(!response.ok) {
                           console.log(response);
                           throw Error("ERROR: 404 Not Found");
                           
                           }
                           
                           //outputs the context within the json file
                           return response.json();
                     })
         
                     //white processing, it changes the state of the blog from null and sets pending to false
                .then(data =>{
                 setBlogs(data);
                 setisLoading(false)
                 setError(null)
                })
                //if we could not fetch the url, we log and error
                 .catch(error => {
                   if(error.name == 'AbortError') console.warn('fetch aborted')
                   else{
                    setisLoading(false);
                    console.warn(error.message)
                   }
                  
                 })

                
             }, 1000)

             return () => {
              abortCont.abort();
              console.log("Fetch aborted");
             }
            }, [url]);
           /*using url as a dependency so that when the url changes
           its going to re-run the UseEffect function to get the data
           to that endpoint*/
         
    return {data, isLoading, error};
}
 
export default useFetchData;