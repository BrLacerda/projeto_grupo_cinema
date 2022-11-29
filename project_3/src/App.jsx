import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import './App.css';
import api from './Api/Api';

function App () {


  
    return (
      <div>
        <div className="container">
          <div className="navBar">
            <NavBar />
          </div>
        <Outlet />
          <div className="Footer">
            <Footer />
          </div>
        </div>
        
      </div>
    )
    
  }


export default App;
