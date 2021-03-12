import React from 'react';
import Head from "next/head";
import HomeBanner from "../../components/HomeBanner";
import Layout from "../../components/Layout";
import ProductCard from "../../components/Product/Card";
import BannerHalf from "../../components/BannerHalf";
import BannerFull from "../../components/BannerFull";
import Brand from "../../components/Brands";


const Home = () => {

   const products = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   const products2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

   const responsiveClass = "col-lg-2-5 col-lg-3 col-md-4 col-sm-6";

   const renderProductCard = () => (
       products.map((item, i) => (
           <div key={i} className={responsiveClass}>
              <ProductCard isNew={true} txt="Dynalite User Interface PDTS"/>
           </div>
       ))
   )

   return (
       <Layout>

          <main>
             <div>
                <div className="container-fluid">
                   <div className="row">
                      <div className="col-12">
                         <HomeBanner/>
                      </div>
                   </div>

                   <div className="row">
                      <div className={responsiveClass}>
                         <div className="products-small-banner">
                            <img src="/static/img/brand/eletron-lamp-black.png" alt="Eletron"/>
                            <h3>
                               Популярные <br/> товары
                            </h3>
                         </div>
                      </div>

                      {renderProductCard()}

                   </div>


                   <div className="row mb-5">
                      <BannerHalf />
                   </div>


                   <div className="row">
                      <div className={responsiveClass}>
                         <div className="products-small-banner">
                            <img src="/static/img/brand/eletron-lamp-black.png" alt="Eletron"/>
                            <h3>
                               Новые <br/> поступления
                            </h3>
                         </div>
                      </div>

                      {renderProductCard()}

                   </div>

                   <div className="row mb-4">
                      <BannerHalf />
                   </div>


                   <div className="row mb-5">
                      <BannerFull />
                   </div>

                   <div className="row">
                      <div className={responsiveClass}>
                         <div className="products-small-banner">
                            <img src="/static/img/brand/eletron-lamp-black.png" alt="Eletron"/>
                            <h3>
                               Наша <br/> рекомендация
                            </h3>
                         </div>
                      </div>

                      {renderProductCard()}

                   </div>

                   <div className="row mb-5">
                      <div className="col-12 mb-4">
                         <h3>Наши партнёры</h3>
                      </div>
                      {products.map((brand, i) => (
                          <div className={responsiveClass} key={i}>
                             <Brand img={i%2 ? 'dkc.png' : 'philips.png'} />
                          </div>
                      ))}
                   </div>

                </div>
             </div>

          </main>
       </Layout>
   );
};

export default Home;