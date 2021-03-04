import React, { Component } from 'react';

import './item-list-operation.css';
import ZoriZavodService from "../../services/zori-zavod-service";
import Spinner from "../spinner/spinner";

// Нужно доделать код в этом файле а потом добавить его в арр и внести изменения в сервис. добавить все операции, чтобы можно было массивом проходить. Спросить совета у Димы по оформлению

export default class ItemListOperation extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        operationList: null
    }

    componentDidMount() {
        this.zoriZavodService.getTechnology(22)
            .then((operationList) => {
                this.setState({
                    operationList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const { operationList } = this.state

        if (!operationList) {
            return <Spinner />
        }

        const items = this.renderItems(operationList)

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        )
    }
}






