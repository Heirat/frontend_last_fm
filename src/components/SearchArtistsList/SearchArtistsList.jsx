import React from 'react';
import SearchArtistItem from "../SearchArtistItem/SearchArtistItem";
import Subtitle from "../ui/Subtitle/Subtitle";
import artistsList from './SearchArtistsList.module.css';

const SearchArtistsList = ({artistList}) => {
    return (
        <>
            {artistList.length !== 0
                ? <Subtitle title="Artist"/>
                : ''
            }
            <ul className={artistsList.content}>
                {artistList.map((a) => <SearchArtistItem
                    name={a.name}
                    key={a.name}
                    countListeners={a.countListeners}
                    image={a.image}
                />)}
            </ul>
        </>
    );
};

export default SearchArtistsList;