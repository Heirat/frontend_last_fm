import React from 'react';
import card from './TrackItem.module.css';

const TrackItem = ({trackTitle, artist, genre, image}) => {
    return (
        <li className={card.content}>
            <img className={card.cover} src={image}/>
            <div className={card.info}>
                <p className={card.title}>{trackTitle}</p>
                <p>{artist}</p>
                <p className={card.genre}>{genre}</p>
            </div>
        </li>
    );
};

export default TrackItem;