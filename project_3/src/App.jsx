import NavBar from './components/NavBar/';
import './App.css';
import { Outlet } from 'react-router-dom';

  function App() {
 
  return (
    <div className="App">
      <div className="conteiner">
        <NavBar />
        <main>
          <Outlet />
        </main>

      <h1>Título</h1>
      </div>
    </div>
  )
}

export default App
