import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    fetch('https://json-sever-proj-resilia.onrender.com/produtos')
      .then(response => response.json())
      .then(data => setMovies(data.results))

  }, []);
  return (
    <div>
    <div>

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Pantera-Negra-2-Disney-Plus.jpg" class="d-block w-100" alt=""/>
              </div>
              <div class="carousel-item">
                <img src="https://images.fanart.tv/fanart/terrifier-634d91d05ff87.jpg" class="d-block w-100" alt=""/>
              </div>
              <div class="carousel-item">
                <img src="https://portalrapmais.com/wp-content/uploads/2022/10/adao-negro-scaled-e1665680179489.jpg" class="d-block w-100" alt=""/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>




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