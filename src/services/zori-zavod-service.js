export default class ZoriZavodService {

    _apiBase = 'http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/' //gas/all

    getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    }
    return await res.json()
    }

    getAllGas = async () => {
        const res = await this.getResource(`/gas/`)
        return res.results.map(this._transformGas)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformGas = (gas) => {
        return {
           id: this._extractId(gas),
           date: gas.date,
           meter: gas.meter,
           price: gas.price

        }
    }




}