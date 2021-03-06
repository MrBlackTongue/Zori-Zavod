import React, {Component} from "react";
import ZoriZavodService from '../../services/zori-zavod-service'

export default class GasForm extends Component {

    zoriZavodService = new ZoriZavodService()

    constructor(props) {
        super(props);
        this.state = { gas: null}

        this.onChangeGas = this.onChangeGas.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        alert(`Газ в количестве "${this.state.gas}" успешно отправлен на сервер`)
        event.preventDefault()
    }

    onChangeGas(event) {
        this.setState({gas: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p><input type='text' name='gas' placeholder='Введите газ'  value={this.state.gas}
                onChange={this.onChangeGas}/></p>
                <p><input type='submit' value='Отправить'/></p>
            </form>
        )
    }
}
