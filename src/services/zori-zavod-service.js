export default class ZoriZavodService {

    _apiBase = 'http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api'

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
        const res = await this.getResource(`/tech/all/`)
        return res
            // .map(this._transformTechnology)
            // .slice(0, 5)
    }

    getTechnology = async (id) => {
        const technology = await this.getResource(`/tech/${id}/`)
        return this._transformOperations(technology)
    }

    getAllOperationsTech = async (id) => {
        const res = await this.getResource(`/tech/${id}/operation/all`)
        return res
    }

    getAllOperationsHistory = async () => {
        return await this.getResource(`/record/all/`)
    }

    deleteTechnology = async (id) => {
        return  await this.getResource(`/tech/delete/${id}/`)
    }

    // getOperation = async (id) => {
    //     const operation = await this.getResource(`/operation/${id}/`)
    //     return this._transformOperation(operation)
    // }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
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

    // _transformTechnologies = (operation) => {
    //     return {
    //         id: operation.id,
    //         name: operation.name,
    //         operations: operation.operations,
    //
    //     }
    // }

    _transformTechnology = (technology) => {
        return {
            id: this._extractId(technology),
            name: technology.name,
            // operations: operation.operations,
        }
    }

    _transformOperations = (technology) => {
        return {
            id: technology.id,
            name: technology.name,
            operations: technology.operations.map((operation) => (
                operation.name
            )),
            standard: technology.operations.map((standard) => (
                standard.standard
            )),
            ratio: technology.operations.map((ratio) => (
                ratio.ratio
            )),
        }
    }
    //
    // _transformOperation = (operation) => {
    //     return {
    //         id: this._extractId(operation),
    //         name: operation.name,
    //         operations: operation.operations
    //     }
    // }

}