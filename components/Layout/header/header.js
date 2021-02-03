import React from 'react';
import HeaderContact from "./headerContact";
import HeaderMain from "./headerMain";
import Menu from "./menu";

const Header = () => {


   return (
       <header className="header">
          <HeaderContact/>
          <HeaderMain/>
          <Menu/>
       </header>
   );
};

export default Header;