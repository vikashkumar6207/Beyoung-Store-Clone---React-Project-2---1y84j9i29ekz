import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Offercomponent = () => {
  return (
    <>
     <Carousel autoPlay infiniteLoop>
        <div>
          <img src="./assets/offer1.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/offer2.jpg" />
        </div>
        <div>
          <img src="./assets/offer3.jpg" />
        </div>
        <div>
          <img src="./assets/offer4.jpg" />
        </div>
        <div>
          <img src="./assets/offer5.jpg" />
        </div>
        <div>
          <img src="./assets/offer6.jpg" />
        </div>
        <div>
          <img src="./assets/offer7.jpg" />
        </div>
        <div>
          <img src="./assets/offer8.jpg" />
        </div>
      </Carousel>
    </>
  )
}

export default Offercomponent;