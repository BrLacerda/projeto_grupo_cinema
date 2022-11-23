<<<<<<< HEAD
import NavBar from './components/NavBar/';
import './App.css';
import { Outlet } from 'react-router-dom';
=======
import NavBar from './components/NavBar';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
>>>>>>> cd6e411c6c8c6340bb2fcc6d3933689acd4bf1e9

  function App() {
 
  return (
    <div className="App">
<<<<<<< HEAD
      <div className="conteiner">
        <NavBar />
        <main>
          <Outlet />
        </main>

      <h1>Título</h1>
=======
      <div className="container">
        <Footer/>
        <NavBar/>
        <Outlet />
        <h1>Título</h1>
>>>>>>> cd6e411c6c8c6340bb2fcc6d3933689acd4bf1e9
      </div>
    </div>
  )
}

export default App;
