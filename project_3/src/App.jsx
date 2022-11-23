import NavBar from './components/NavBar';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="App">
      <div className="container">
        <Footer/>
        <NavBar/>
        <Outlet />
        <h1>Título</h1>
      </div>
    </div>
  )
}

export default App;
