import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = (props) => {
   return (
       <div>
          <Header/>
          <div className="layout-children">
             {props.children}
          </div>
          <Footer/>
       </div>
   );
};

export default Layout;