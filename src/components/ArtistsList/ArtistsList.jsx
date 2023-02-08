import React from 'react';
import artists from "./Artists.module.css";
import ArtistCard from "../ArtistCard/ArtistCard";

const ArtistsList = ({artistsList, isLoading}) => {

    if (!artistsList.length && !isLoading) {
        return (
            <h2 style={{textAlign: 'center', marginTop: '20px'}}>
                is empty here :(
            </h2>
        )
    }

    return (
        <ul className={artists.list}>
            {artistsList.map((artist) =>
                <ArtistCard
                    key={artist.name}
                    name={artist.name}
                    genre={artist.genre}
                    image={artist.image}/>
            )}
        </ul>
    );
};

export default ArtistsList;