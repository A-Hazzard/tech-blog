import Navbar from './Navbar';
import Home from './Home';
import Stores from './Stores'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import About from './About';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
 
  return (
    <Router>
   <div className="App">
       <Navbar />
     
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/create'>
            <Create />
          </Route>

          <Route exact path='/stores'>
            <Stores />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>

          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </div>

   
   </div>
   </Router>
  );
}

export default App;
