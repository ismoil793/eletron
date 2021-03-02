import React from 'react';
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";
import MainButton from "../Buttons/MainButton";
import Link from "next/link"

const Card = () => {
   return (
       <div className="product-card">
          <figure>
             <Link href={"/"}>
                <a className="">
                   <img src="/static/img/product/example.jpg" alt="Example product"/>
                   <figcaption>
                      <h4>Dynalite User Interface PDTS</h4>
                      <div className="card-price">
                         <PriceRefactor price={580000}/>
                      </div>
                   </figcaption>
                </a>
             </Link>
          </figure>
          <div className="add-to-cart">
             <MainButton txt={"Купить"}/>
          </div>
       </div>
   );
};

export default Card;