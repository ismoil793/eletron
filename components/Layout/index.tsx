import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Head from "next/head";

interface LayoutProps {
    title: string,
    description: string,
    keywords: string
}

const Layout: React.FC<LayoutProps> = ({title, description, keywords, children}) => {
    return (
        <>
            <Head>
                <title>
                    {title ? title : 'Интернет-магазин техники в Ташкенте | eletron.uz'}
                </title>
                <meta
                    name="description"
                    content={description ? description
                        : 'Купить в Ташкенте по доступной цене и бесплатной доставкой? Легко на eletron.uz!'}
                />
                <meta
                    name="keywords"
                    content={keywords ? keywords : "Онлайн-магазин, Техника, Ташкент"}
                />
                <meta name="author" content="Eletron"/>
                <meta
                    property="og:image"
                    content="/static/img/brand/ogimage.png"
                />
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