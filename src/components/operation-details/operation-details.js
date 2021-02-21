import React, { Component } from 'react'

import './operation-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";

export default class OperationDetails extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        technology: null
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
            return
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
            return <span>Select a technology from a list</span>
        }

        const { name, operations } = technology

        return (
            <div className='operation-details card'>

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Operations</span>
                            <span>{operations}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}