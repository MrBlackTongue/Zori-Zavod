import React, { Component } from 'react'

import './technology-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";

export default class TechnologyDetails extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        technology: null,
    }

    componentDidMount() {
        this.updateOperation()
    }

    componentDidUpdate(prevProps) {
        if (this.props.technologyId !== prevProps.technologyId) {
            this.updateOperation()
        }
    }

    updateOperation() {
        const { technologyId } = this.props
        if (!technologyId) {
            return;
        }

        this.zoriZavodService
            .getTechnology(technologyId)
            .then((technology) => {
                this.setState({ technology })
            })
    }

    render() {

        const { technology } = this.state
        if (!technology) {
            return <span>Выберите технологию слева</span>
        }

        const { name } = technology

        return (
            <div className='technology-details card '>
                <div className='form-inline'>
                    <h5>{name}</h5>
                </div>
                <div>
                    <button type="button" className="btn btn-warning mx-sm-2 mb-2">Изменить</button>
                    <button type="button" className="btn btn-danger mx-sm-2 mb-2">Удалить</button>

                    {/*<ul className='list-group list-group-flush'>*/}
                        {/*<li className='list-group-item'>*/}
                        {/*    <span className='term'>Операции:</span>*/}
                        {/*    /!*<span>{operations}</span>*!/*/}
                        {/*</li>*/}
                        {/*<li className='list-group-item'>*/}
                        {/*    <span className='term'>Standard</span>*/}
                        {/*    <span>{standard}</span>*/}
                        {/*</li>*/}
                        {/*<li className='list-group-item'>*/}
                        {/*    <span className='term'>Ratio</span>*/}
                        {/*    <span>{ratio}</span>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        )
    }
}













