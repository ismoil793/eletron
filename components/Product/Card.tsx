import React from 'react';
import PriceRefactor from "../Refactors/PriceRefactor";
import MainButton from "../Buttons/MainButton";
import Link from "next/link"
import NameRefactor from "../Refactors/NameRefactor";

interface CardProps {
    txt: string
}

function SvgComponent(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <path
                d="M473.872 0H147.064c-21.379 0-38.128 16.749-38.128 38.128V93.14c0 21.379 16.749 38.128 38.128 38.128 26.156 0 67.562-.136 108.974-.272 41.379-.136 82.764-.272 108.898-.272 9.009 0 16.34 7.331 16.34 16.34v326.808c0 9.167-7.173 16.34-16.34 16.34H38.128c-9.162 0-16.34-7.173-16.34-16.34V147.064c0-9.162 7.179-16.34 16.34-16.34h27.234c6.013 0 10.894-4.88 10.894-10.894 0-6.013-4.88-10.894-10.894-10.894H38.128C16.749 108.936 0 125.685 0 147.064v326.808C0 495.251 16.749 512 38.128 512h326.808c21.379 0 38.128-16.749 38.128-38.128V147.064c0-21.025-17.108-38.128-38.128-38.128-26.156 0-67.557.136-108.969.272-41.385.136-82.77.272-108.904.272-9.162 0-16.34-7.179-16.34-16.34V38.128c0-9.162 7.179-16.34 16.34-16.34h326.808c9.167 0 16.34 7.179 16.34 16.34v326.808c0 9.167-7.173 16.34-16.34 16.34h-27.234c-6.013 0-10.894 4.88-10.894 10.894s4.88 10.894 10.894 10.894h27.234c21.379 0 38.128-16.749 38.128-38.128V38.128C512 16.749 495.251 0 473.872 0z"/>
        </svg>
    )
}

const Card: React.FC<CardProps> = ({txt}) => {
    return (
        <div className="product-card">
            <figure>
                <Link href={"/"}>
                    <a className="">
                        <img src="/static/img/product/example.jpg" alt="Example product"/>
                        <figcaption>
                            <h4><NameRefactor txt={txt} length={45}/></h4>
                            <div className="card-price">
                                <PriceRefactor price={580000}/>
                            </div>
                        </figcaption>
                    </a>
                </Link>
            </figure>
            <div className="functional-btns">
                <MainButton txt={"Купить"}/>
                <div className="compare-btn">
                    <SvgComponent />
                </div>
            </div>
        </div>
    );
};

export default Card;