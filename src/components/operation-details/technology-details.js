import React, { Component } from 'react'

import './technology-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";

export default class TechnologyDetails extends Component {

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
            return <span>Select a technology from a list</span>
        }

        const { name , operations, standard, ratio } = technology

        return (
            <div className='technology-details card'>

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Operations</span>
                            <span>{operations}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Standard</span>
                            <span>{standard}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Ratio</span>
                            <span>{ratio}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}













