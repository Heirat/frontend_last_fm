
function renderArtist(name, countListeners, image) {
    return `
    <li class="artist-result-wrap">
        <img class="cover-art rounded"
            src="${image}"
            loading="lazy">
        <div class="artist-result-item">
            <h3 class="artist-result-item-name">
                <a href="/" class="artist-result-item-name-link">${name}</a>
            </h3>
            <p class="artist-result-item-listeners">
                ${countListeners} listeners
            </p>
        </div>
    </li>
    `
}

function renderAlbum(albumTitle, name, image) {
    return `
    <li class="album-result-wrap">
        <img class="cover-art"
            src="${image}"
            loading="lazy">
        <div class="album-result-item">
            <h3 class="album-result-item-name">
                <a href="/" class="album-result-item-name-link">${albumTitle}</a>
            </h3>
            <p class="album-result-item-artist">
                ${name}
            </p>
        </div>
    </li>
    `
}


function renderTrack(trackTitle, name, image, duration) {
    return `
    <tr class="chartlist-row">
        <td class="chartlist-image">
            <a href="/" class="cover-art">
                <img class="chartlist-image-image"
                    src="${image}">
            </a>
        </td>
        <td class="chartlist-name">
            <a class="chartlist-name-link" href="/">${trackTitle}</a>
        </td>
        <td class="chartlist-artist">
            <a class="chartlist-artist-link" href="/">${name}</a>
        </td>
        <td class="chartlist-duration">${duration}</td>
    </tr>
    `
}

function parseTime(ms) {
    let seconds = parseInt((ms / 1000) % 60);
    let minutes = parseInt((ms / (1000 * 60)) % 60);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
}


function clearOldResults(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

async function toSearch(text) {
    const { results: artistsResults } = await get('', { method: 'artist.search', limit: 8, artist: text });
    const { results: albumsResults } = await get('', { method: 'album.search', limit: 8, album: text });
    const { results: tracksResults } = await get('', { method: 'track.search', limit: 8, track: text });

    const searchHeader = document.querySelector('.content-top-inner-wrap');
    searchHeader.innerHTML = `
        <h1 class="content-top-heading">Search results for "${text}"</h1>
    `

    const artists = document.querySelector('.artist-results');
    const albums = document.querySelector('.album-results');
    const tracks = document.querySelector('.chartlist-body');

    clearOldResults(artists);
    clearOldResults(albums);
    clearOldResults(tracks);

    for (const a of artistsResults.artistmatches.artist) {
        artists.innerHTML += renderArtist(a.name, a.listeners, a.image[2]['#text'])
    }
    for (const a of albumsResults.albummatches.album) {
        albums.innerHTML += renderAlbum(a.name, a.artist, a.image[2]['#text'])
    }
    for (const a of tracksResults.trackmatches.track) {
        const { track } = await get('', { method: 'track.getInfo', track: a.name, artist: a.artist });
        tracks.innerHTML += renderTrack(a.name, a.artist, a.image[2]['#text'], +track.duration ? parseTime(track.duration) : '')
    }
}


document.getElementsByClassName('header-search-submit')[0].addEventListener('click', async (e) => {
    e.preventDefault();
    const value = document.getElementById('header-search-field').value || '';
    await toSearch(value);
});

function getGet(name) {
    var s = window.location.search;
    s = s.match(new RegExp(name + '=([^&=]+)'));
    return s ? s[1] : false;
}

function init() {
    const query = getGet("q");
    if (query != false) {
        toSearch(query);
    }
}

init()
