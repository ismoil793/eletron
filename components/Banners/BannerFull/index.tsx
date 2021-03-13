import React from 'react';
import Link from 'next/link'

const BannerFull = () => {
    return (
        <div className="col-12">
            <Link href="/">
                <a className="banner-full-link">
                    <div className="banner-info">
                        <h5>Световые технологии для</h5>
                        <h5>Вашего офиса</h5>
                        <Link href="/">
                            <a className="btn-eletron main">Каталог</a>
                        </Link>
                    </div>
                    <img src="/static/img/banner/banner-full.jpg" alt="Banner full"/>
                </a>
            </Link>
        </div>
    );
};

export default BannerFull;