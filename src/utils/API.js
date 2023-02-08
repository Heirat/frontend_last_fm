/**
 * Класс для работы с API
 */
class API {
    #LAST_FM_TOKEN = '388b578379e461c178a129065f24262b';
    #BASE_URL = 'https://ws.audioscrobbler.com/2.0';


    async get(url = '', query = {}, requireToken = true) {
        try {
            const urlParams = {format: 'json', ...query};
            let cUrl = `${this.#BASE_URL}/${url}?` + new URLSearchParams();

            if (requireToken) { // подмешиваем токен если нужно
                urlParams.api_key = this.#LAST_FM_TOKEN;
            }

            cUrl += new URLSearchParams(urlParams);
            const res = await fetch(
                cUrl,
                {method: 'GET'}
            );

            return res.json();
        } catch (e) {
            console.log('Error while getting resource:', e);
            throw e
        }
    }
}

export default new API();