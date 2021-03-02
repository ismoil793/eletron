import React from 'react';
import Link from "next/link";
import FooterNavProps from "../footerNavProps"
import FooterNavItem from "./item";

interface NavListProps {
    links: FooterNavProps[] | undefined,
    key: number,
    title: string
}

const FooterList = ({links, title, key}: NavListProps) => {

    return (
        <div className="footer-nav-list-wrap" key={key}>
            <h5>{title}</h5>
            <ul>
                {
                    links.map((item,i) => (
                        <FooterNavItem link={item.link} className={item.className} text={item.text} />
                    ))
                }
            </ul>
        </div>
    );
};

export default FooterList;