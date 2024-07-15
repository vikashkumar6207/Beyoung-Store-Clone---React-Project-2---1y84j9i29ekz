import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Carousel } from "react-responsive-carousel";
const Homecomponent = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="./assets/home_Img.png" alt="" />
        </div>
        <div>
          <img src="./assets/Homepage_crousel.jpg" />
        </div>
        <div>
          <img src="./assets/monsoon-sale-deskto1p123.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Homecomponent;
