import React, { Component } from "react";

import './history-item-list.css'
import ZoriZavodService from "../../services/zori-zavod-service";
import Spinner from "../spinner/spinner";

export default class HistoryItemList extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        operationsHistoryList: null
    }

    componentDidMount() {
        this.zoriZavodService.getAllOperationsHistory()
            .then((operationsHistoryList) => {
                this.setState({
                    operationsHistoryList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({ id, date, technologyName, operationName }) => {
            return (
                <li className='list-group-item history'
                    key={id}>
                    {date} | {technologyName} => {operationName}
                </li>
            )
        })
    }

    render() {

        const { operationsHistoryList } = this.state

        if (!operationsHistoryList) {
            return <Spinner />
        }

        const items = this.renderItems(operationsHistoryList)

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        )
    }
}







