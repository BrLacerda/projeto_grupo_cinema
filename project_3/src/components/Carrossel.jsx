import React from 'react'

const Carrossel = () => {
  return (
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

    </div>
  )
}

export default Carrossel