const LAST_FM_TOKEN = '388b578379e461c178a129065f24262b';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

async function get(url = '', query = {}, requireToken = true) {
    try {
        const urlParams = {format: 'json', ...query};
        let cUrl = `${BASE_URL}/${url}?` + new URLSearchParams();

        if (requireToken) { 
            urlParams.api_key = LAST_FM_TOKEN;
        }

        cUrl += new URLSearchParams(urlParams);
        const res = await fetch(
            cUrl,
            {method: 'GET'}
        );

        return res.json();
    } catch (e) {
        console.log('Error while getting resource:', e);
    }
}
