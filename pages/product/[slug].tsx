import React from 'react';
import Layout from "../../components/Layout";
import ProductSlider from "../../components/Banners/ProductSlider";

const Product = () => {
   return (
       <Layout
           title="Product's page"
           description="product"
           keywords="keywords"
       >
          <section className="product-section">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-6">
                          <ProductSlider />
                      </div>
                      <div className="col-lg-6">

                      </div>
                  </div>
              </div>
          </section>
       </Layout>
   );
};

export default Product;