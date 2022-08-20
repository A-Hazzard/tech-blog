import BlogList from './BlogList';
import useFetchData from './useFetchData';
//stateless functional component(sfc)
const Home = () => {
  const {data, isLoading, error} = useFetchData('http://localhost:8000/blogs');
  
  return (  
    <div className="home">

    {error && <div>{ error }</div>}
    {isLoading && <div>LOADING...</div>}
    {data && <BlogList blogs={data} title="All Blogs!"/>}
    
    </div>
        
  ); 
}

export default Home;
//taskkill -F -IM node.exe (terminates node server)

/*WATCHES DATA ON SERVER
npx json-server --watch data/db.json --port 8000
*/