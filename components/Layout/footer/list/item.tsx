import React from 'react';
import Link from 'next/link'
import FooterNavProps from "../footerNavProps"


const FooterNavItem: React.FC<FooterNavProps> = ({link, text, className}) => {
    return (
        <li className={className}>
            {/* scroll is true by default */}
            <Link href={link} scroll={true}>
                <a>{text}</a>
            </Link>
        </li>
    );
};

export default FooterNavItem;