import React, { Component } from 'react'

import './technology-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";
import DeleteRequestTech from "../delete-request-tech";

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

        const { id, name } = technology

        return (
            <div className='technology-details card '>
                <div className='form-inline'>
                    <h5>{name}</h5>
                </div>
                <div>
                    {/*<button type="button" className="btn btn-warning mx-sm-2 mb-2">Изменить</button>*/}
                    {/*<button type="button" className="btn btn-danger mx-sm-2 mb-2">Удалить</button>*/}
                    <DeleteRequestTech technologyId={id}/>

                </div>
            </div>
        )
    }
}













