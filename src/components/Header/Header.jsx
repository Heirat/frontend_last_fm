import React from 'react';
import {Link} from "react-router-dom";
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.main}>
            <div className={header.wrapper}>
                <Link to={"/"}><img src="img/logo.svg" alt="ico"/></Link>
                <nav className={header.end}>
                    <ul className={header.navWrapper}>
                        <li className={header.nav__item}><Link to="/">Main page</Link></li>
                        <li className={header.nav__item}><Link to="search">Search</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;