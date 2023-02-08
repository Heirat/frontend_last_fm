import React from 'react';
import card from './SearchAlbumItem.module.css';

const SearchAlbumItem = ({albumTitle, name, image}) => {
    return (
        <li className={card.content}>
            <img className={card.cover} src={image}/>
            <div className={card.info}>
                <p className={card.title}>{albumTitle}</p>
                <p>{name}</p>
            </div>
        </li>
    );
};

export default SearchAlbumItem;