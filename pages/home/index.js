import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import Slider from "react-slick";


const Home = () => {

   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
   };

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
             <meta name="author" content="Eletron" />
             <meta
                 property="og:image"
                 content="/static/img/brand/ogimage.png"
             />
          </Head>
          <Layout>
             <Slider {...settings} />
          </Layout>
       </>
   );
};

export default Home;