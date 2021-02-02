import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = (props) => {
   return (
       <div>
          <Header/>
            {props.children}
          <Footer/>
       </div>
   );
};

export default Layout;