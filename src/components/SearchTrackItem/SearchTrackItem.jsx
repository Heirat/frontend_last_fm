import React from 'react';
import card from './SearchTrackItem.module.css';

const SearchTrackItem = ({trackTitle, name, image, duration}) => {
    return (
        <li className={card.content}>
            <img className={card.cover} src={image}/>
            <p className={card.title}>{trackTitle}</p>
            <p>{name}</p>
            <p className={card.duration}>{duration}</p>
        </li>
    );
};

export default SearchTrackItem;