import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="slider">
        <div className="slides">
            <input type="radio" name='radio-btn' className='r1'/>
            <input type="radio" name='radio-btn' className='r2'/>
            <input type="radio" name='radio-btn' className='r3'/>
            <input type="radio" name='radio-btn' className='r4'/>
            <input type="radio" name='radio-btn' className='r5'/>
        </div>


          <div className='slide' id='first'>
              <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Pantera-Negra-2-Disney-Plus.jpg" alt="Pantera Negra: Wakanda Forever" />
          </div>
          <div className='slide'>
              <img src="https://c4.wallpaperflare.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg" alt="Avatar" />
          </div>
          <div className='slide'>
              <img src="https://images.fanart.tv/fanart/terrifier-634d91d05ff87.jpg" alt="Terrifier 2" />
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



        <div className="conteiner">
            <div className="agenda">
              <div className="dias">
                <input type="radio" name='dia' id='dia0'/>
                <input type="radio" name='dia' id='dia1'/>
                <input type="radio" name='dia' id='dia2'/>
                <input type="radio" name='dia' id="dia3"/>
              </div>
              <div className="labels">
                <label htmlFor="dia0" className='tags'><h1>Hoje 25/11</h1></label>
                <label htmlFor="dia0" className='tags'><h1>Amanhã 26/11</h1></label>
                <label htmlFor="dia0" className='tags'><h1>Dia 27/11</h1></label>
                <label htmlFor="dia0" className='tags'><h1>Dia 28/11</h1></label>
              </div>
              <div className="conteinerFilmes">
                <div className="filmeCard">
                  <div className="movieImg">
                    <img src="https://br.web.img3.acsta.net/pictures/20/02/03/09/30/4865530.jpg" alt="Capa do Minions 2" className='movieCaps'/>
                  </div>
                  <div className="movieInfo">
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://cdn.fstatic.com/media/movies/covers/2011/06/540cd1294ec23fd5fb74b2a83423536d_5.jpg" alt="Capa do Avatar" className='movieCaps'/>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://s3.amazonaws.com/img.iluria.com/product/8CB08D/162BEC4/450xN.jpg" alt="Capa do Terrifier 2" className='movieCaps'/>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/09/09/526262834-blackadamver5xlg.jpg" alt="Capa do Adão Negro" className='movieCaps'/>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://pbs.twimg.com/media/FgfNxy8WAAA2jAx.jpg" alt="Capa do Wakanda Forever" className='movieCaps'/>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home