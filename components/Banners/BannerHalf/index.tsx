import React from 'react';
import Link from "next/link";

const BannerHalf = () => {
    return (
        <>
            <div className="col-md-6">
                <Link href="/">
                    <a className="banner-half-link">
                        <img src="/static/img/banner/half-1.jpg" alt="Banner 1"/>
                    </a>
                </Link>
            </div>
            <div className="col-md-6">
                <Link href="/">
                    <a className="banner-half-link">
                        <img src="/static/img/banner/half-2.jpg" alt="Banner 2"/>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default BannerHalf;