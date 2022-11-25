import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="slider">
        <div className="slides">
            <input type="radio" name='radio-btn' className='radio1'/>
            <input type="radio" name='radio-btn' className='radio2'/>
            <input type="radio" name='radio-btn' className='radio3'/>
            <input type="radio" name='radio-btn' className='radio4'/>
            <input type="radio" name='radio-btn' className='radio5'/>
        </div>


          <div className='slide' id='first'>
              <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Pantera-Negra-2-Disney-Plus.jpg" alt="Pantera Negra: Wakanda Forever" />
          </div>
          <div className='slide'>
              <img src="https://c4.wallpaperflare.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg" alt="Avatar" />
          </div>
          <div className='slide'>
              <img src="https://cdn.falauniversidades.com.br/wp-content/uploads/2022/10/17111939/harry-potter-e-a-camara-secreta.jpg" alt="Harry Potter e a Câmara Secreta" />
          </div>
          <div className='slide'>
              <img src="https://cdn.filestackcontent.com/compress/output=format:jpg/cache=expiry:max/resize=width:720/M73Nl04XQVq6LJ5YFaxx" alt="Minions 2: A origem de Gru" />
          </div>
          <div className='slide'>
              <img src="https://weu-www.sway-cdn.com/s/YXIMzz6wAUfAu9Qw/images/TJLq5XMNDICiQS?quality=1200&allowAnimation=true" alt="Adão Negro" />
          </div>
        </div>

        <div className="nav-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          <div className="auto-btn5"></div>
        </div>

        <div className="manual">
          <label htmlFor="radio1" className='manual-btn'></label>
          <label htmlFor="radio2" className='manual-btn'></label>
          <label htmlFor="radio3" className='manual-btn'></label>
          <label htmlFor="radio4" className='manual-btn'></label>
          <label htmlFor="radio5" className='manual-btn'></label>
        </div>
    </div>
  )
}

export default Home