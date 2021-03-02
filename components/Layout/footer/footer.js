import React from 'react';
import Link from 'next/link'
import FooterList from "./list";
import {FaTelegram, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {

   const links = [
      {link: '/', text: 'Освещение', className: 'footer-nav-link'},
      {link: '/', text: 'Умный дом', className: 'footer-nav-link'},
      {link: '/', text: 'Умные дачи', className: 'footer-nav-link'},
      {link: '/', text: 'Стабилизаторы напряжения', className: 'footer-nav-link'},
      {link: '/', text: 'Выключатели', className: 'footer-nav-link'},
   ]


   return (
       <footer className="footer">
          <div className="overlay">
          </div>
          <div className="container-fluid">


             <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                   <FooterList key={1} links={links} title={"Популярное"} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                   <FooterList key={2} links={links} title={"Покупателям"} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                   <FooterList key={3} links={links} title={"Профессионалам"} />
                </div>
                <div className="col-lg-3 col-6">
                   <div className="right-side-list">
                      <img src="/static/img/brand/white-eletron.png" alt="Eletron logo"/>
                      <div className="phone">
                         +998 <span>71 200 33 66</span>
                      </div>
                      <div className="email">
                         info<span>@eletron.uz</span>
                      </div>
                      <div className="eletron-social">
                         Мы в социальных сетях:
                      </div>
                      <div className="social-icons">
                         <a href="https://google.com" target="_blank"><FaTelegram /></a>
                         <a href="https://google.com" target="_blank"><FaFacebook /></a>
                         <a href="https://google.com" target="_blank"><FaInstagram /></a>
                         <a href="https://google.com" target="_blank"><FaYoutube /></a>
                      </div>
                   </div>
                </div>
             </div>


             <div className="row">
                <div className="col-12">
                   <div className="border-line">
                   </div>
                   <div className="copyright">
                      Все права защищены. <span>ООО "Eletron"</span>
                   </div>
                </div>
             </div>


          </div>
       </footer>
   );
};

export default Footer;