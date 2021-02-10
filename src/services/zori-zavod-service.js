export default class ZoriZavodService {

    _apiBase = 'http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com'

    getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    }
    return await res.json()
    }

    // getAllGas = async () => {
    //     const res = await this.getResource(`/gas/`)
    //     return res.results
    //         .map(this._transformGas)
    //         .slice(0, 5)
    // }

    getAllTechnologies = async () => {
        const res = await this.getResource(`/api/tech/all/`)
        return res.results
            .map(this._transformTechnologies)
            .slice(0, 5)
    }

    getTechnology = async (id) => {
        const technology = await this.getResource(`/api/tech/add/${id}/`)
        return this._transformTechnology(technology)
    }

    getAllOperations = async () => {
        const res = await this.getResource(`/api/operation/all/`)
        return res.results
            .map(this._transformOperations)
            .slice(0, 5)
    }

    getOperation = async (id) => {
        const operation = await this.getResource(`/api/operation/add/${id}/`)
        return this._transformOperation(operation)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    // _transformGas = (gas) => {
    //     return {
    //        id: this._extractId(gas),
    //        date: gas.date,
    //        meter: gas.meter,
    //        price: gas.price
    //
    //     }
    // }

    _transformTechnologies = (technology) => {
        return {
            id: technology.id,
            name: technology.name,
            ratio: technology.ratio,
            technology: technology.technology
        }
    }

    _transformTechnology = (technology) => {
        return {
            id: this._extractId(technology),
            name: technology.name,
            operations: technology.operations
        }
    }

    _transformOperations = (operation) => {
        return {
            id: operation.id,
            name: operation.name,
            ratio: operation.ratio,
            technology: operation.technology
        }
    }

    _transformOperation = (operation) => {
        return {
            id: this._extractId(operation),
            name: operation.name,
            operations: operation.operations
        }
    }

}