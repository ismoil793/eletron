import React from 'react';

const HeaderContact = () => {

   const socials = [
      {
         img: 'telegram',
         link: 'https://telegram.org/'
      },
      // {
      //    img: 'youtube',
      //    link: 'https://youtube.com/'
      // },
      {
         img: 'instagram',
         link: 'https://instagram.com/'
      },
      {
         img: 'facebook',
         link: 'https://facebook.com/'
      },
   ];

   return (
       <div className="header_top">
          <div className="container-fluid">
             <div
                 className="row d-flex justify-content-center justify-content-sm-between align-items-center"
             >

                <div className="col-auto order-lg-1 d-flex">
                   <p className="mb-0">Мы в социальных сетях: </p>
                   {socials.map((item, i) => (
                       <a
                           key={i}
                           href={item.link}
                           target="_blank"
                           className="ml-2"
                       >
                          <img
                              src={`/static/img/socials/${item.img}.png`}
                              alt={item.img}
                          />
                       </a>
                   ))}
                </div>


                <div className="col-auto order-lg-3 pt-2 pt-sm-0 ">
                   <div className="mb-0 d-flex" style={{ fontWeight: "600" }}>
                      <div>
                         <small><strong>+998</strong></small><span className="red_text"> 71 200 33 66</span>
                      </div>
                      {/* <div className="language-dropdown-wrapper">
                                    <button type="button" className="ml-3" onClick={this.handleClick}>
                                       {this.props.translate('header.lang')}<i
                                          className="fas fa-angle-down red_text"></i>
                                    </button>
                                    {this.state.dropDown ? (
                                       <LanguageSwitcher />
                                    ) : null}
                                 </div> */}
                   </div>
                </div>


             </div>
          </div>
       </div>
   );
};

export default HeaderContact;