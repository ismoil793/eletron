import React from 'react';
import Head from "next/head";
import HomeBanner from "../../components/HomeBanner";
import Layout from "../../components/Layout";
import ProductCard from "../../components/Product/Card";


const Home = () => {

   const products = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
                      <div className="col-lg-2 col-lg-2-5">
                         <div className="products-small-banner">
                            <img src="/static/img/brand/eletron-lamp-black.png" alt="Eletron"/>
                            <h3>
                               Популярные <br/> товары
                            </h3>
                         </div>
                      </div>
                      {
                         products.map((item, i) => (
                             <div key={i} className="col-lg-2 col-lg-2-5">
                                <ProductCard txt="Dynalite User Interface PDTS фывфы фыв фыв ыв ыв вфыв"/>
                             </div>
                         ))
                      }
                   </div>


                </div>
             </div>

          </main>
       </Layout>
   );
};

export default Home;