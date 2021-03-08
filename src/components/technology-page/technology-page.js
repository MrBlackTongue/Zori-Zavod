import React, { Component } from "react";

import ItemList from '../item-list'
import TechnologyDetails from "../technology-details/technology-details";

import './technology-page.css'
import ItemListOperation from "../item-list-operation";
import OperationDetails from "../operation-details";

export default class TechnologyPage extends Component {

    state = {
        selectedTechnology:  22,
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

                    <TechnologyDetails technologyId={this.state.selectedTechnology} />
                    <ItemListOperation  technologyId={this.state.selectedTechnology}/>
                    {/*<OperationDetails techologyId={this.state.selectedTechnology} />*/}

                </div>
            </div>
        )
    }
}





















