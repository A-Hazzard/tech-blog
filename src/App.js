import Navbar from './Navbar';
import Home from './Home';
import Stores from './Stores'
function App() {
 
  return (
   <div className="App">
       <Navbar />
     
      <div className='content'>
        <Home />
      </div>

      <div className="stores">
        <Stores />
      </div>
   </div>
  );
}

export default App;
