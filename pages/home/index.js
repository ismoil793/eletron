import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import Slider from "react-slick";


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
             <meta name="author" content="Eletron" />
             <meta
                 property="og:image"
                 content="/static/img/brand/ogimage.png"
             />
          </Head>
          <Layout>
             asd
          </Layout>
       </>
   );
};

export default Home;