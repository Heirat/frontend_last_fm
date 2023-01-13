function renderHotArtist(name, genre, image) {
    return `
    <li class="list-item-wrap">
        <div class="list-item ">
            <img class="avatar"
            src="${image}" loading="lazy">
            <h3 class="list-item-name">
                <a href="/" class="list-item-name-link ">${name}</a>
            </h3>
            <section class="regular-tags music-more-list-item-regular-tags">
                <ul class="tags">
                    <li class="tag"><a class="tag-link" href="/">${genre}</a></li>
                </ul>
            </section>
        </div>
    </li>
    `
}

function renderPopularTrack(trackTitle, artist, genre, image) {
    return `
    <li class="tracks-item-wrap">
        <img class="cover-art"
            src="${image}" loading="lazy">
        <div class="tracks-item">
            <h3 class="tracks-item-name">
            <a href="/" class="tracks-item-name-link ">${trackTitle}</a>
            </h3>
            <p class="tracks-item-artist">
                <a class="tracks-item-artist-link" href="/">${artist}</a>
            </p>
            <section class="regular-tags tracks-tags">
            <ul class="tags">
                <li class="tag"><a class="tag-link" href="/">${genre}</a></li>                
            </ul>
            </section>
        </div>
    </li>
    `
}


async function init() {
    await showArtists();
    await showTracks();
}


async function showArtists() {
    const { artists } = await get('', { method: 'chart.gettopartists', limit: 12 });

    const artistsWithTags = await Promise.all(artists.artist.map(async (a) => {
        const tags = await getTagByArtist(a.name);
        return {
            ...a, tags
        }
    }))

    const topArtistList = document.getElementsByClassName('artists')[0];
    artistsWithTags.forEach((a) => {
        topArtistList.innerHTML += renderHotArtist(a.name, a.tags, a.image[2]['#text'])
    })

}

async function showTracks() {
    const { tracks } = await get('', { method: 'chart.gettoptracks', limit: 15 });

    const tracksWithTags = await Promise.all(tracks.track.map(async (t) => {
        const tags = await getTagByArtist(t.artist.name);
        return {
            ...t, tags
        }
    }))

    const topTracksList = document.getElementsByClassName('tracks')[0];
    tracksWithTags.forEach((t) => {
        console.log(t);
        topTracksList.innerHTML += renderPopularTrack(t.name, t.artist.name, t.tags, t.image[2]['#text'])
    })
}

async function getTagByArtist(name) {
    const { artist } = await get('', { method: 'artist.getInfo', artist: name });
    return artist.tags.tag.map((tag) => tag.name).join(' ')
}

init()