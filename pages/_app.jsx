import React from "react";
import App from "next/app";
// import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {wrapper} from '../store/store';
import Router from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {

   static async getInitialProps({Component, ctx}) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      //Anything returned here can be accessed by the client
      return {pageProps: pageProps};
   }

   render() {
      const {Component, pageProps} = this.props;

      return (
             <Component {...pageProps}/>
      )

   }
}

export default wrapper.withRedux(MyApp)
