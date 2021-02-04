import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Categories from "./categories";
import ClickAwayListener from 'react-click-away-listener';


const Menu = () => {

   const [isCatMenuOpen, setCatMenuOpen] = useState(false);
   const [deviceWidth, setDeviceWidth] = useState(0);

   useEffect(() => {
      setDeviceWidth(window.innerWidth)
   }, []);

   const handleClickAway = () => {
      setCatMenuOpen(false)
   };

   return (
       <ClickAwayListener onClickAway={handleClickAway}>
          <nav className="main_nav">
             <div className="container-fluid">
                <div className="row">
                   <div className="col">


                      <div className="main_nav_content d-flex flex-row">
                         <div
                             className="cat_menu_container"
                             onClick={() => setCatMenuOpen(!isCatMenuOpen)}
                         >
                            <div
                                className="cat_menu_title d-flex flex-row align-items-center">
                               <div className="cat_burger">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                               </div>
                               <div className="cat_menu_text">Категории</div>
                            </div>
                         </div>


                         {/* Categories opened nav-bar for large screens */}
                         {
                            isCatMenuOpen && deviceWidth >= 768 ? <Categories/> : null
                         }

                         {/* Same nav-bar for mobile devices */}
                         {
                            // isCatMenuOpen && deviceWidth >= 768 ? <Categories/> : null
                         }

                         <div className="main_nav_menu ml-auto">
                            <ul className="standard_dropdown main_nav_dropdown">
                               <li className="special">
                                  <Link
                                      href={{
                                         pathname: "/catalog/[id]"
                                      }}
                                      as={`/catalog/test`}
                                  >
                                     <a>О нас</a>
                                  </Link>
                               </li>
                               <li className="special">
                                  <Link
                                      href={{
                                         pathname: "/catalog/[id]"
                                      }}
                                      as={`/catalog/test`}
                                  >
                                     <a>Филиалы</a>
                                  </Link>
                               </li>
                               <li className="special">
                                  <Link
                                      href={{
                                         pathname: "/catalog/[id]"
                                      }}
                                      as={`/catalog/test`}
                                  >
                                     <a>Новости</a>
                                  </Link>
                               </li>
                               <li className="special">
                                  <Link
                                      href={{
                                         pathname: "/catalog/[id]"
                                      }}
                                      as={`/catalog/test`}
                                  >
                                     <a>Контакты</a>
                                  </Link>
                               </li>
                            </ul>
                         </div>

                         <div className="menu_trigger_container ml-auto">
                            <div
                                // onClick={this.props.Callback}
                                className="menu_trigger d-flex flex-row align-items-center justify-content-end"
                            >
                               <div className="menu_burger">
                                  <div className="menu_trigger_text">Меню</div>
                                  <div className="cat_burger menu_burger_inner">
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                  </div>
                               </div>
                            </div>
                         </div>


                      </div>
                   </div>
                </div>
             </div>
          </nav>
       </ClickAwayListener>
   );
};

export default Menu;