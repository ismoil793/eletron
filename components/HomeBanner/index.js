import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import MainBtn from "../Buttons/MainButton";
import Link from 'next/link'

const HomeBanner = () => {

   // To avoid warning caused by Slick, we have to override slick's arrow components
   const SlickArrowLeft = ({currentSlide, slideCount, ...props}) => (
       <GrPrevious
           {...props}
           className={
              "slick-prev slick-arrow" +
              (currentSlide === 0 ? " slick-disabled" : "")
           }
           aria-hidden="true"
           aria-disabled={currentSlide === 0 ? true : false}
           type="button"
       >
       </GrPrevious>
   )

   const SlickArrowRight = ({currentSlide, slideCount, ...props}) => (
       <GrNext
           {...props}
           className={
              "slick-next slick-arrow" +
              (currentSlide === slideCount - 1 ? " slick-disabled" : "")
           }
           aria-hidden="true"
           aria-disabled={currentSlide === slideCount - 1 ? true : false}
           type="button"
       >
       </GrNext>
   )


   const settings = {
      autoplay: true,
      infinite: true,
      accessibility: true,
      autoplaySpeed: 50000,
      speed: 450,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />,
   };


   return (
       <Slider {...settings} className="banner-home-wrap">
          <figure className="home-banner-figure">
             <img src="/static/img/banner/1.jpg" alt="Banner 1"/>
             <div className="overlay"></div>

             <figcaption>
                <h5>Умные решения <br/>
                для умного дома
                </h5>

                <Link href={"/"}>
                   <a className="btn-eletron main">
                      Подробнее
                   </a>
                </Link>

                {/*<MainBtn txt={"Подробнее"} />*/}
             </figcaption>
          </figure>
          <figure className="home-banner-figure">
             <img src="/static/img/banner/2.jpg" alt="Banner 2"/>
             <div className="overlay"></div>
             <figcaption>
             </figcaption>
          </figure>
          <figure className="home-banner-figure">
             <img src="/static/img/banner/1.jpg" alt="Banner 2"/>
             <div className="overlay"></div>
             <figcaption>
             </figcaption>
          </figure>
       </Slider>
   );
};

export default HomeBanner;