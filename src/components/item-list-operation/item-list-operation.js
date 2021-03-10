import React, { Component } from 'react';

import './item-list-operation.css';
import ZoriZavodService from "../../services/zori-zavod-service";
import Spinner from "../spinner/spinner";
import TechnologyPage from "../technology-page";

export default class ItemListOperation extends Component {

    zoriZavodService = new ZoriZavodService()
    constructor(props) {
        super(props);

        this.state = {
            operationList: null,
            operationsId: [],
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange = e => {

        let newArray = [...this.state.operationsId, e.target.id];
        if (this.state.operationsId.includes(e.target.id)) {
            newArray = newArray.filter(day => day !== e.target.id);
        }
        this.setState({
            operationsId: newArray
        });
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
        const { technologyId } = this.props
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
                <div>

                    <li className="list-group-item"
                        // key={id}
                        // id={id}
                        // onClick={() => this.props.onItemSelected(id)}
                    >
                        <input type='checkbox' className='checkbox'
                               id={id}
                               value={id}
                               onChange={this.handleCheckboxChange}
                        />
                        &nbsp; {name} ( Стандарт: {standard} ) ( Ратио: {ratio} )
                    </li>


                </div>

            );
        });
    }


    submitHandler = (e) => {
        e.preventDefault();
        fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/operationAdd`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.operationsId
            )
        }).then(response => response.json())
    }

    render() {

        const { operationList } = this.state

        if (!operationList) {
            return <Spinner />
        }

        const items = this.renderItems(operationList)

        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <ul className='item-list list-group'>
                        {items}
                    </ul>

                    <button type='submit' className='btn btn-success' >Отправить</button>
                </form>
                {/*<input type='submit'/>*/}
            </div>
        )
    }
}






