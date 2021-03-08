import React, { Component } from 'react'

import './operation-details.css'
import ZoriZavodService from "../../services/zori-zavod-service";
import ItemListOperation from "../item-list-operation";

// Здесь нужно настроить файл так, чтобы выбранный ид технологиии подгружался в ссылку с операциями этой технологии. Исправить здесь и возможно в странице технологиии и проверить арр. Найти чтобы все пути вели к ссылке на все операциии определенной технологии.

export default class OperationDetails extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        operation: null,
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
            .getAllOperationsTech(technologyId)
            .then((operation) => {
                this.setState({ operation })
            })
    }

    render() {

        const { operation } = this.state
        if (!operation) {
            return <span>Select a technology from a list</span>
        }

        const { name , operations, standard, ratio } = operation

        return (
            <div className='operation-details card'>
                <div className='card-body'>
                    <h4>{name}</h4>

                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Операции:</span>
                            {/*<span>{operations}</span>*/}
                        </li>
                        {/*<li className='list-group-item'>*/}
                        {/*    <span className='term'>Standard</span>*/}
                        {/*    <span>{standard}</span>*/}
                        {/*</li>*/}
                        {/*<li className='list-group-item'>*/}
                        {/*    <span className='term'>Ratio</span>*/}
                        {/*    <span>{ratio}</span>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        )
    }
}













