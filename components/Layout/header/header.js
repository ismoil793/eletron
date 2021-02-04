import React, {useEffect} from 'react';
import HeaderContact from "./headerContact";
import HeaderMain from "./headerMain";
import Menu from "./menu";
import Cookies from "universal-cookie";
import {useDispatch} from "react-redux";
import {refreshToken} from "../../../store/actions/user";
const uuidv1 = require('uuid/v1');


const Header = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      const nextYear = new Date();
      nextYear.setFullYear(new Date().getFullYear() + 5);

      const cookies = new Cookies();
      cookies.set("device_type", "web");

      if (!cookies.get('device_token')) {
         let device_id = uuidv1();
         cookies.set('device_token', device_id, {
            path: '/',
            expires: nextYear
         })
      }
      if (!cookies.get('access_token') && cookies.get('refresh_token')) {
         dispatch(refreshToken(cookies.get('refresh_token')))
      }

   }, []);

   return (
       <header className="header">
          <HeaderContact/>
          <HeaderMain/>
          <Menu/>
       </header>
   );
};

export default Header;