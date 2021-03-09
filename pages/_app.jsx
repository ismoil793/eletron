import React from "react";
import App from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {wrapper} from '../store/store';
import Router from "next/router";
import NProgress from 'nprogress';
import {motion, AnimatePresence} from "framer-motion";
import 'nprogress/nprogress.css';
import "../public/static/css/bootstrap.css"
import "../public/static/css/eletron-scss.css"
import "../public/static/css/eletron.css"
import "../public/static/css/responsive.css"

/* progress bar on top */
NProgress.configure({showSpinner: true});
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
      const {Component, pageProps, router} = this.props;
      const spring = {
         type: "spring",
         damping: 20,
         stiffness: 100,
         when: "afterChildren"
      };

      return (
          <AnimatePresence> {/* transition on every page load */}
             <div className="page-transition-wrapper">
                <motion.div
                    transition={spring}
                    key={router.pathname}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    id="page-transition-container"
                >
                   {/* default by next js */}
                   <Component {...pageProps}/>
                </motion.div>
             </div>
          </AnimatePresence>
      )
   }
}

export default wrapper.withRedux(MyApp) /* connection of redux */
