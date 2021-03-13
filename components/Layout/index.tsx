import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Head from "next/head";

interface LayoutProps {
    title?: string,
    description?: string,
    keywords?: string,
    img?: string,
    ogType?: string,
    url?: string,
    locale?: string
}

const Layout: React.FC<LayoutProps> = (
    {
        title = 'Интернет-магазин техники в Ташкенте | eletron.uz',
        description = 'Купить в Ташкенте по доступной цене и бесплатной доставкой? Легко на eletron.uz!',
        keywords = "Онлайн-магазин, Техника, Ташкент",
        img= '/static/img/brand/ogimage.png',
        url= 'https://eletron.uz',
        ogType= 'website',
        locale= 'ru_RU',
        children
    }) => {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta
                    name="description"
                    content={description}
                />
                <meta
                    name="keywords"
                    content={keywords}
                />
                <meta name="author" content="Eletron"/>

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />

                <meta property="og:type" content={ogType} />
                <meta property="og:site_name" content="Eletron.uz" />
                <meta property="og:locale" content={locale} />

            </Head>
            <Header/>
            <div className="layout-children">
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;