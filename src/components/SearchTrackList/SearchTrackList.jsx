import React from 'react';
import Subtitle from "../ui/Subtitle/Subtitle";
import SearchTrackItem from "../SearchTrackItem/SearchTrackItem";
import tracksList from './SearchTrackList.module.css';

const SearchTrackList = ({trackList}) => {
    return (
        <>
            {trackList.length !== 0
                ? <Subtitle title="Tracks"/>
                : ''
            }
            {trackList.length !== 0
                ? <ul className={tracksList.content}>
                    {trackList.map((t) => <SearchTrackItem
                        name={t.name}
                        key={t.trackTitle}
                        trackTitle={t.trackTitle}
                        duration={t.duration}
                        image={t.image}
                    />)}
                </ul>
                : ''
            }
        </>
    );
};

export default SearchTrackList;