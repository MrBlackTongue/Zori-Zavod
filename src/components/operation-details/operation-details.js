import React, { Component } from 'react'

import './operation-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";

export default class OperationDetails extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        operation: null
    }

    componentDidMount() {
        this.updateOperation()
    }

    componentDidUpdate(prevProps) {
        if (this.props.operationId !== prevProps.operationId) {
            this.updateOperation()
        }
    }

    updateOperation() {
        const { operationId } = this.props
        if (!operationId) {
            return
        }

        this.zoriZavodService
            .getOperation(operationId)
            .then((operation) => {
                this.setState({ operation })
            })
    }

    render() {

        const { operation } = this.state
        if (!operation) {
            return <span>Select a operation from a list</span>
        }

        const { id, name, operations } = operation

        return (
            <div className='operation-details card'>

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Operation</span>
                            <span>{operations}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}