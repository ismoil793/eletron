import React from 'react';
import Link from "next/link";

const Categories = () => {

   const renderCategories = () => {
      const arr = [];
      for (let i = 0; i < 5; i++) {
         if (i % 2 === 0) {
            arr.push((
                <a className="text_label" href="/catalog/podarochnye-karty">
                   <li key={i} className={`menu_label${i === 0 ? '_opened' : ''}`}>
                      <img className="menu_label_image"
                           src="https://dl.brandstore.uz/storage/categories/293/IEzcUzgPzQEfm444XRxb.jpg"
                           alt="Подарочные карты"/><span>Подарочные карты</span> <i
                       className="fas fa-chevron-right"> </i>
                      <div className="sub_list">
                         <div className="row">
                            <div className="col-md-6">
                               <div className="sub_label"><h3>Подарочные карты</h3></div>
                               <ul className="menu_list"><a className="text_label"
                                                            href="/catalog/podarochnye-karty-200-000">
                                  <li className="menu_label"><span>Подарочные карты 200 000</span></li>
                               </a><a className="text_label" href="/catalog/podarochnye-karty-500-000">
                                  <li className="menu_label"><span>Подарочные карты 500 000</span></li>
                               </a><a className="text_label" href="/catalog/podarochnye-karty-1-000-000">
                                  <li className="menu_label"><span>Подарочные карты 1 000 000</span></li>
                               </a></ul>
                            </div>
                            <div className="col-md-6">
                               <div className="category_image"><a><img
                                   src="https://dl.brandstore.uz/storage/ads/22/gBBB0ce18owrq4crlOAW.jpg"/></a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </li>
                </a>
            ))
         } else {
            arr.push(
                <a className="text_label" href="/catalog/dlya-geymerov">
                   <li key={i} className="menu_label">
                      <img className="menu_label_image"
                           src="https://dl.brandstore.uz/storage/categories/20/Lk16mc11ktBHdyU8JwRb.jpg"
                           alt="Для геймеров"/><span>Для геймеров</span> <i
                       className="fas fa-chevron-right"> </i>
                      <div className="sub_list">
                         <div className="row">
                            <div className="col-md-6">
                               <div className="sub_label"><h3>Для геймеров</h3></div>
                               <ul className="menu_list"><a className="text_label" href="/catalog/igrovye-kresla">
                                  <li className="menu_label"><span>Игровые кресла</span></li>
                               </a><a className="text_label" href="/catalog/igrovye-klaviatury">
                                  <li className="menu_label"><span>Игровые клавиатуры</span></li>
                               </a><a className="text_label" href="/catalog/igrovye-myshi">
                                  <li className="menu_label"><span>Игровые мыши</span></li>
                               </a><a className="text_label" href="/catalog/kabelya">
                                  <li className="menu_label"><span>Кабеля</span></li>
                               </a><a className="text_label" href="/catalog/korpusa">
                                  <li className="menu_label"><span>Игровые кейсы</span></li>
                               </a><a className="text_label" href="/catalog/naushniki">
                                  <li className="menu_label"><span>Игровые наушники</span></li>
                               </a><a className="text_label" href="/catalog/kovriki">
                                  <li className="menu_label"><span>Коврики</span></li>
                               </a><a className="text_label" href="/catalog/provodnye-naushniki-i-mikrofony">
                                  <li className="menu_label"><span>Проводные наушники и микрофоны</span></li>
                               </a><a className="text_label" href="/catalog/igrovye-stoly">
                                  <li className="menu_label"><span>Игровые столы</span></li>
                               </a><a className="text_label" href="/catalog/igrovye-aksessuary">
                                  <li className="menu_label"><span>Игровые аксессуары</span></li>
                               </a><a className="text_label" href="/catalog/antiblikovye-ochki">
                                  <li className="menu_label"><span>Антибликовые очки</span></li>
                               </a></ul>
                            </div>
                            <div className="col-md-6">
                               <div className="category_image"><a
                                   href="https://brandstore.uz/productPage/kreslo-cougar-armor-s"><img
                                   src="https://dl.brandstore.uz/storage/ads/5/RKhMecJOfvS7RIX7j0JU.jpg"/></a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </li>
                </a>
            )
         }
      }
      return arr
   };

   return (
       <div className="menu">
          <div className="container-fluid">
             <div className="list">
                <ul className="menu_list">
                   {renderCategories()}
                </ul>
             </div>
          </div>
       </div>
   );
};

export default Categories;