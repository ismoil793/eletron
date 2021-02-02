import React from 'react';
import Cookies from "universal-cookie";
import Link from "next/link";
import Search from "../../Search";


const HeaderMain = () => {

   const cookies = new Cookies();
   let url = '';

   if (cookies.get("access_token")) {
      url = "/profile";
   } else {
      url = "/login";
   }

   return (
       <div className="header_main">
          <div className="container-fluid">
             <div className="row">
                <div className="col-lg-3 col-sm-3 col-3 order-1">
                   <div className="logo_container">
                      <div className="logo">
                         <Link href="/">
                            <a>
                               <img
                                   src="/static/img/brand/logo.png"
                                   alt="Eletron"
                               />
                            </a>
                         </Link>
                      </div>
                   </div>
                </div>

                <Search/>

                <div
                    className="col-xl-3 col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right d-flex align-items-center justify-content-end">
                   <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                      <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                         <div className="wishlist_icon">
                            <Link href="/compare">
                               <a href="#">
                                  <img
                                      src="/static/img/icons/color.png"
                                      alt="compare"
                                  />
                               </a>
                            </Link>
                         </div>
                      </div>
                      <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                         <div className="wishlist_icon">
                            <Link href="/compare">
                               <a href="#">
                                  <img
                                      src="/static/img/icons/star.png"
                                      alt="favourite"
                                  />
                               </a>
                            </Link>
                         </div>
                      </div>

                      <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                         <div className="wishlist_icon">
                            <Link href={url}>
                               <a href="#">
                                  <img
                                      src="/static/img/icons/user.png"
                                      alt="user"
                                  />
                               </a>
                            </Link>
                         </div>
                      </div>

                      <div className="cart">
                         <div
                             className="cart_container d-flex flex-row align-items-center justify-content-end">
                            <div className="cart_icon">
                               <Link href="/cart">
                                  <a href="#">
                                     <img
                                         src="/static/img/icons/cart.png"
                                         alt="cart"
                                     />
                                     <div className="cart_count">
                                                   <span>
                                                      {/*{*/}
                                                      {/*   !this.props.cart.cart.total_count ? 0*/}
                                                      {/*       : this.props.cart.cart.total_count*/}
                                                      {/*}*/}
                                                      <strong>0</strong>
                                                   </span>
                                     </div>
                                  </a>
                               </Link>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default HeaderMain;