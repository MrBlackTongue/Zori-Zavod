import React, { Component } from "react";

import ItemList from '../item-list'
import OperationDetails from "../operation-details/operation-details";

import './technology-page.css'

export default class TechnologyPage extends Component {

    state = {
        selectedTechnology: 1,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {

        this.setState({
            hasError: true
        })
    }

    onTechnologySelected = (selectedTechnology) => {
        this.setState({ selectedTechnology })
    }

    render() {

        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList onItemSelected={this.onTechnologySelected} />
                </div>
                <div className='col-md-6'>
                    <OperationDetails operationId={this.state.selectedTechnology} />
                </div>
            </div>
        )
    }
}





















