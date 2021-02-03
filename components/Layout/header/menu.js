import React from 'react';
import Link from "next/link";

const Menu = () => {
   return (
       <nav className="main_nav">
          <div className="container-fluid">
             <div className="row">
                <div className="col">
                   <div className="main_nav_content d-flex flex-row">
                      <div
                          className="cat_menu_container"
                          // onClick={this.OpenCategory}
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


                      <div className="menu">
                         <div className="container-fluid">
                            <div className="list">
                               <ul className="menu_list">
                                  <Link
                                      href={{
                                         pathname: "/catalog/[id]"
                                      }}
                                      as={`/catalog/test`}
                                  >
                                     <a className="text_label">
                                        <li
                                            // onClick={this.OpenCategory}
                                            // className={k === 0 ? "menu_label_opened" : "menu_label"}
                                        >
                                           <img
                                               className="menu_label_image"
                                               // src={category.wicon}
                                               // alt={category.name}
                                               alt={"no image"}
                                           />
                                           <span>Имя</span>{" "}
                                           {/*{category.childs &&*/}
                                           {/*category.childs.length > 0 ? (*/}
                                           {/*    <i className="fas fa-chevron-right"> </i>*/}
                                           {/*) : null}*/}


                                           {/*{category.childs &&*/}
                                           {/*category.childs.length > 0 ? (*/}

                                           <div className="sub_list">
                                              <div className="row">
                                                 <div className="col-md-6">
                                                    <div className="sub_label">
                                                       <h3>Новости</h3>
                                                    </div>
                                                    <ul className="menu_list">

                                                       <Link
                                                           // onClick={this.OpenCategory}
                                                           href={{
                                                              pathname: "/catalog/[id]"
                                                           }}
                                                           as={`/catalog/test`}
                                                       >
                                                          <a className="text_label">
                                                             <li className="menu_label">
                                                        <span>
                                                          test
                                                        </span>
                                                             </li>
                                                          </a>
                                                       </Link>
                                                    </ul>
                                                 </div>
                                                 <div className="col-md-6">
                                                    <div className="category_image">
                                                       {/*<a*/}
                                                       {/*    href={*/}
                                                       {/*       category.ad*/}
                                                       {/*           ? category.ad.ad_link*/}
                                                       {/*           : null*/}
                                                       {/*    }*/}
                                                       {/*>*/}
                                                       {/*   <img*/}
                                                       {/*       src={*/}
                                                       {/*          category.ad*/}
                                                       {/*              ? category.ad.image*/}
                                                       {/*              : null*/}
                                                       {/*       }*/}
                                                       {/*   />*/}
                                                       {/*</a>*/}
                                                    </div>
                                                 </div>
                                              </div>
                                           </div>
                                           ) : (
                                           <div className="sub_list">
                                              <div className="row">
                                                 <div className="col-md-6">
                                                    <div className="sub_label">
                                                       <h3>test</h3>
                                                    </div>
                                                 </div>

                                                 <div className="col-md-6">
                                                    <div className="ad_image">
                                                       {/*<a*/}
                                                       {/*    href={*/}
                                                       {/*       category.ad*/}
                                                       {/*           ? category.ad.ad_link*/}
                                                       {/*           : null*/}
                                                       {/*    }*/}
                                                       {/*>*/}
                                                       {/*   <img*/}
                                                       {/*       src={*/}
                                                       {/*          category.ad*/}
                                                       {/*              ? category.ad.image*/}
                                                       {/*              : null*/}
                                                       {/*       }*/}
                                                       {/*       alt={category.name}*/}
                                                       {/*   />*/}
                                                       {/*</a>*/}
                                                    </div>
                                                 </div>
                                              </div>
                                           </div>
                                           )}
                                        </li>
                                     </a>
                                  </Link>

                               </ul>
                            </div>
                         </div>
                      </div>


                      {/*<div className="main_nav_menu ml-auto">*/}
                      {/*   {productCategories &&*/}
                      {/*   productCategories.length > 0 ? (*/}
                      {/*       <ul className="standard_dropdown main_nav_dropdown">*/}
                      {/*          {productCategories.slice(0, 8).map(category => (*/}
                      {/*              <li key={category.id} className={category.id === 1 ? "hassubs" : "special"}>*/}
                      {/*                 <Link*/}
                      {/*                     href={{*/}
                      {/*                        pathname: "/catalog/[id]"*/}
                      {/*                     }}*/}
                      {/*                     as={`/catalog/${category.slug}`}*/}
                      {/*                 >*/}
                      {/*                    {category.id == 257 ? (*/}
                      {/*                        <a className="special_category">*/}
                      {/*                           {category.name}*/}
                      {/*                        </a>*/}
                      {/*                    ) : (*/}
                      {/*                        <a>*/}
                      {/*                           {category.name}*/}
                      {/*                        </a>*/}
                      {/*                    )}*/}

                      {/*                 </Link>*/}

                      {/*              </li>*/}
                      {/*          ))}*/}
                      {/*       </ul>*/}
                      {/*   ) : null}*/}
                      {/*</div>*/}

                      {/*<div className="menu_trigger_container ml-auto">*/}
                      {/*   <div*/}
                      {/*       onClick={this.props.Callback}*/}
                      {/*       className="menu_trigger d-flex flex-row align-items-center justify-content-end"*/}
                      {/*   >*/}
                      {/*      <div className="menu_burger">*/}
                      {/*         <div className="menu_trigger_text">{this.props.translate('header.menu')}</div>*/}
                      {/*         <div className="cat_burger menu_burger_inner">*/}
                      {/*            <span></span>*/}
                      {/*            <span></span>*/}
                      {/*            <span></span>*/}
                      {/*         </div>*/}
                      {/*      </div>*/}
                      {/*   </div>*/}
                      {/*</div>*/}



                   </div>
                </div>
             </div>
          </div>
       </nav>
   );
};

export default Menu;