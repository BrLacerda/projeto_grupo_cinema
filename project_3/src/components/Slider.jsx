import React from 'react'

const Slider = () => {
  return (
    <div className="slider">
        <div className="slides">
            <input type="radio" name='radio-btn' id='image1'/>
            <input type="radio" name='radio-btn' id='image2'/>
            <input type="radio" name='radio-btn' id='image3'/>
            <input type="radio" name='radio-btn' id='image4'/>
            <input type="radio" name='radio-btn' id='image5'/>
        </div>

        <div className="firstImg">
            <img src="..\images\banner1.jpg" alt="img1" />
        </div>
        <div className="secondImg">
            <img src="..\images\banner2.jpg" alt="img2" />
        </div>
        <div className="thirdImg">
            <img src="..\images\banner3.jpg" alt="img3" />
        </div>
        <div className="fourthImg">
            <img src="..\images\banner4.jpg" alt="img4" />
        </div>
        <div className="fifthImg">
            <img src="..\images\banner5.jpg" alt="img5" />
        </div>
    </div>
  )
}

export default Slider