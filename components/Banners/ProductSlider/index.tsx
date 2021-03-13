import React from 'react';
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {

    const baseUrl = "https://picsum.photos";

    const settings: Settings = {
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        arrows: true,
        vertical: true,
        verticalSwiping: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false
    };

    return (
        <div className="row">

            <div className="col-3">
                <div className="product-photo-gallery">
                    <Slider {...settings}>
                        <div className="slide-preview">
                            <img src={`${baseUrl}/200/300`} alt={"1"}/>
                        </div>
                        <div className="slide-preview">
                            <img src={`${baseUrl}/201/301`} alt={"2"}/>
                        </div>
                        <div className="slide-preview">
                            <img src={`${baseUrl}/203/303`} alt={"3"}/>
                        </div>
                        <div className="slide-preview">
                            <img src={`${baseUrl}/204/304`} alt={"4"}/>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="col-9">
                <div className="gallery-item">

                </div>
            </div>

        </div>
    );
};

export default Index;