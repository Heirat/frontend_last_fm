import React from 'react';
import footer from './Footer.module.css';
import FooterItem from "./FooterItem/Footer";
import {footerLinks} from "./helpers";

const Footer = () => {
    return (
        <footer className={footer.content}>
            {footerLinks.map((it) =>
                <FooterItem
                    key={it.title}
                    title={it.title}
                    text={it.text}
                />)}
        </footer>
    );
};

export default Footer;