import React from 'react';
import Head from "next/head";
import HomeBanner from "../../components/HomeBanner";
import Layout from "../../components/Layout";


const Home = () => {

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

                   </div>

                </div>
             </div>

          </main>
       </Layout>
   );
};

export default Home;