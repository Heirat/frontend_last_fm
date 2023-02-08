import React from 'react';
import item from './FooterItem.module.css'

const FooterItem = ({title, text}) => {
    return (
        <div className={item.content}>
            <a href="#" className={item.title}>{title}</a>
            <a href="#" className={item.text}>{text[0]}</a>
            <a href="#" className={item.text}>{text[1]}</a>
            <a href="#" className={item.text}>{text[2]}</a>
        </div>
    );
};

export default FooterItem;