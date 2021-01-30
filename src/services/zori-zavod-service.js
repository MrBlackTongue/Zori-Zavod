export default class ZoriZavodService {

    _apiBase = 'http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/'

    getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    }
    return await res.json()
    }




}