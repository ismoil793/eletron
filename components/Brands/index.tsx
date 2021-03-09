import React, {FC} from 'react';
import Link from 'next/link';

interface BrandProps {
    img: string
}

const Brand:FC<BrandProps> = ({img}) => {
    return (
        <Link href="/">
            <a className="partner-logo">
                <img src={`/static/img/brand/${img}`} alt={img}/>
            </a>
        </Link>
    );
};

export default Brand;