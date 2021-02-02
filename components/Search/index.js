import React from 'react';

const Search = () => {
   return (
       <div className="col-xl-6 col-lg-5 col-12 order-lg-2 order-3 text-lg-left text-right">
          <div className="header_search">
             <div className="header_search_content">
                <div className="header_search_form_container">
                   <form
                       autoComplete="off"
                       // onSubmit={this.FormSearch}
                       className="header_search_form clearfix"
                   >
                      <input
                          autoComplete="off"
                          type="text"
                          // onChange={this.handleSearchChange}
                          name="searching"
                          // value={this.state.searching}
                          list="searchproducts"
                          required="required"
                          className="header_search_input"
                          // placeholder={this.props.translate('header.search')}
                          // onClick={this.handleChange}
                          placeholder="Поиск по товарам..."
                      />

                      {/*{this.state.isShow ? (*/}
                      {/*    <div className="datalist">{displayList}</div>*/}
                      {/*) : null}*/}

                      <button
                          type="submit"
                          className="header_search_button trans_300"
                      >
                         <img
                             src="/static/img/icons/search.png"
                             alt="search"
                         />
                      </button>
                   </form>
                </div>
             </div>
          </div>
       </div>
   );
};

export default Search;