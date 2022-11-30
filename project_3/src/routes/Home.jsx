import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import Carrossel from '../components/Carrossel';
import { useParams } from 'react-router-dom';


const Home = () => {

  const { id } = useParams()

  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('https://json-sever-proj-resilia.onrender.com/produtos')
      .then(response => response.json())
      .then(data => { 
      setPosts(data)
      console.log(posts)
  })

  }, []);
  return (
    <div>
    <div>
      <h1>Teste</h1>

      {posts.map( post => {
        return (
          <h1>{post.nome}</h1>
        
      )})}

      <Carrossel />

        <div className="conteiner">
            <div className="agenda">
              <div className="dias">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                  <label class="btn btn-outline-dark" for="btnradio1">Hoje</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                  <label class="btn btn-outline-dark" for="btnradio2">Amanhã</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                  <label class="btn btn-outline-dark" for="btnradio3">dia 2/12</label>
              </div>
              </div>
              <div className="conteinerFilmes">
                <div className="filmeCard">
                  <div className="movieImg">
                    <img src="https://br.web.img3.acsta.net/pictures/20/02/03/09/30/4865530.jpg" alt="Capa do Minions 2" className='movieCaps'/>
                    <div className="infoIcons">
                      <span class="badge text-bg-danger">HD</span>
                      <span class="badge text-bg-secondary">DUB</span>
                      <span class="badge text-bg-success">CI</span>
                    </div>
                  </div>
                  <div className="movieInfo">
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://cdn.fstatic.com/media/movies/covers/2011/06/540cd1294ec23fd5fb74b2a83423536d_5.jpg" alt="Capa do Avatar" className='movieCaps'/>
                  <div className="infoIcons">
                    <span class="badge text-bg-danger">HD</span>
                    <span class="badge text-bg-secondary">DUB</span>
                    <span class="badge text-bg-success">CI</span>
                  </div>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://s3.amazonaws.com/img.iluria.com/product/8CB08D/162BEC4/450xN.jpg" alt="Capa do Terrifier 2" className='movieCaps'/>
                  <div className="infoIcons">
                    <span class="badge text-bg-danger">HD</span>
                    <span class="badge text-bg-secondary">DUB</span>
                    <span class="badge text-bg-success">CI</span>
                  </div>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/09/09/526262834-blackadamver5xlg.jpg" alt="Capa do Adão Negro" className='movieCaps'/>
                  <div className="infoIcons">
                    <span class="badge text-bg-danger">HD</span>
                    <span class="badge text-bg-secondary">DUB</span>
                    <span class="badge text-bg-success">CI</span>
                  </div>
                  
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>


                <div className="filmeCard">
                  <div className="movieImg">
                  <img src="https://pbs.twimg.com/media/FgfNxy8WAAA2jAx.jpg" alt="Capa do Wakanda Forever" className='movieCaps'/>
                  <div className="infoIcons">
                    <span class="badge text-bg-danger">HD</span>
                      <span class="badge text-bg-secondary">DUB</span>
                      <span class="badge text-bg-success">CI</span>
                  </div>
                  </div>
                  <div className="movieInfo">
                  <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius architecto recusandae fugit! Ipsa dolores maxime tempore soluta iure! Nesciunt doloribus nam delectus repudiandae doloremque! Eaque voluptate voluptas mollitia labore.</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
    
  )}


export default Home