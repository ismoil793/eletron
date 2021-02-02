import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      let props = {...initialProps};

      return props;
   }

   render() {
      return (
          <Html>
             <Head>
                <link rel="icon" type="image/png" sizes="10x16" href="/static/img/brand/favicon.png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/globals.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/responsive.css"/>
             </Head>
             <body>
             <Main/>
             <NextScript/>
             </body>
          </Html>
      );
   }
}
