import React from 'react';
import card from './SearchArtistItem.module.css';

const SearchArtistItem = ({name, countListeners, image}) => {
    return (
        <li className={card.content}>
            <img className={card.cover} src={image}/>
            <div className={card.info}>
                <p className={card.name}>{name}</p>
                <p className={card.listeners}>{countListeners} listeners</p>
            </div>
        </li>
    );
};

export default SearchArtistItem;