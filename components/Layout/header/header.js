import React from 'react';
import HeaderContact from "./headerContact";
import HeaderMain from "./headerMain";

const Header = () => {


   return (
       <header className="header">
          <HeaderContact/>
          <HeaderMain/>
       </header>
   );
};

export default Header;