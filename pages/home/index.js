import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import HomeBanner from "../../components/HomeBanner";


const Home = () => {

   return (
       <>
          <Head>
             <title>
                Интернет-магазин техники в Ташкенте | eletron.uz
             </title>
             <meta
                 name="description"
                 content="Купить в Ташкенте по доступной цене и бесплатной доставкой? Легко на eletron.uz!"
             />
             <meta
                 name="keywords"
                 content="Онлайн-магазин, Техника, Ташкент"
             />
             <meta name="author" content="Eletron"/>
             <meta
                 property="og:image"
                 content="/static/img/brand/ogimage.png"
             />
          </Head>
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

                      </div>

                   </div>
                </div>

             </main>
          </Layout>
       </>
   );
};

export default Home;