import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import MainBtn from "../Buttons/MainButton";

const HomeBanner = () => {

   const settings = {
      autoplay: true,
      infinite: true,
      accessibility: true,
      autoplaySpeed: 50000,
      speed: 450,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <GrNext />,
      prevArrow: <GrPrevious />,
   };

   return (
       <Slider {...settings} className="banner-home-wrap">
          <figure className="home-banner-figure">
             <img src="/static/img/banner/1.jpg" alt=""/>
             <div className="overlay"></div>
             <figcaption>
                <h5>Умные решения <br/>
                для умного дома
                </h5>
                <MainBtn txt={"Подробнее"} />
             </figcaption>
          </figure>
          <figure className="home-banner-figure">
             <img src="/static/img/banner/2.jpg" alt=""/>
             <div className="overlay"></div>
             <figcaption>
             </figcaption>
          </figure>
          <figure className="home-banner-figure">
             <img src="/static/img/banner/1.jpg" alt=""/>
             <div className="overlay"></div>
             <figcaption>
             </figcaption>
          </figure>
       </Slider>
   );
};

export default HomeBanner;