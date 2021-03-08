import React, { Component } from 'react';

import './item-list-operation.css';
import ZoriZavodService from "../../services/zori-zavod-service";
import Spinner from "../spinner/spinner";

export default class ItemListOperation extends Component {

    zoriZavodService = new ZoriZavodService()

    state = {
        operationList: null,
    }

    // onTechnologySelected = (selectedTechnology) => {
    //     this.setState({selectedTechnology})
    // }

    componentDidMount() {
        this.updateOperation()
    }

    componentDidUpdate(prevProps) {
        if (this.props.technologyId !== prevProps.technologyId) {
            this.updateOperation()
        }
    }

    updateOperation() {
        const { technologyId } =this.props
        if (!technologyId) {
            return
        }

        this.zoriZavodService
            .getAllOperationsTech(technologyId)
            .then((operationList) => {
                this.setState({ operationList })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name, standard, ratio}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    // onClick={() => this.props.onItemSelected(id)}
                >
                    {name} ( Стандарт: {standard} ) ( Ратио: {ratio} )
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
            <div>
                <ul className='item-list list-group'>
                    {items}
                </ul>
                <input type='submit'/>
            </div>
        )
    }
}






