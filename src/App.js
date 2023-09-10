import {Route,Routes,Link} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import NewsLetter from './Pages/NewsLetter'
function App() {
  return (
    <div className="App">
      <navbar className="Navbar"> 
          <h3>Digital Sahil</h3>
          <div className="NavLinks">
           <Link to="/" className="link">Home</Link>
           <Link to="/about" className="link">About</Link>
           <Link to="/newsletter" className="Btn">My Newsletter</Link>
          </div> 
        </navbar>
      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/newsletter' element={<NewsLetter/>}/>
          <Route path='/*' element={<NotFound/>}/>
      </Routes> 
      
    </div>
  );
}

export default App;
