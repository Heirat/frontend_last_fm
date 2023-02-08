import React from 'react';
import Subtitle from "../ui/Subtitle/Subtitle";
import SearchAlbumItem from "../SearchAlbumItem/SearchAlbumItem";
import albumsList from './SearchAlbumList.module.css';

const SearchAlbumList = ({albumList}) => {
    return (
        <>
            {albumList.length !== 0
                ? <Subtitle title="Albums"/>
                : ''
            }
            {albumList.length !== 0
                ? <ul className={albumsList.content}>
                    {albumList.map((a) => <SearchAlbumItem
                        key={a.albumTitle}
                        albumTitle={a.albumTitle}
                        name={a.name}
                        image={a.image}
                    />)}
                </ul>
                : ''
            }
        </>
    );
};

export default SearchAlbumList;