import React, { Component } from 'react';
import ZoriZavodService from "../../services/zori-zavod-service";

export default class DeleteRequestOp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            operation: null,
        }
    }

    zoriZavodService = new ZoriZavodService()

    componentDidMount() {
        this.updateOperation()
    }

    componentDidUpdate(prevProps) {
        if (this.props.technologyId !== prevProps.technologyId) {
            this.updateOperation()
        }
    }

    updateOperation() {
        const { operationId } = this.props
        if (!operationId) {
            return;
        }

        this.zoriZavodService
            .getOperation(operationId)
            .then((operation) => {
                this.setState({ operation })
            })
    }

    deleteHandler = (e) => {

        if (window.confirm('Подтвердите удаление операции'))
        {
            e.preventDefault();
            fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/operation/delete/${this.state.operation.id}/`, {
                method: "DELETE",

            }).then(response => response.json())
            // .then(data => {
            //     console.log('Data from response: ', data);
            //     this.setState({forecasts: [...this.state.forecasts, data]})
            // });
        }
    }

    render() {

        return (
            <div>
                <form onClick={this.deleteHandler} className='form-inline'>
                    <input type='submit' value="Удалить" className='btn btn-danger'/>
                </form>
            </div>
        )
    }
}