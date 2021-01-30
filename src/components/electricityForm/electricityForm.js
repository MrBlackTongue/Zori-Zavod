import React, {Component} from "react";

export default class ElectricityForm extends Component {

    constructor(props) {
        super(props);
        this.state = { electricity: null}

        this.onChangeElectricity = this.onChangeElectricity.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        alert(`Электричество в количестве "${this.state.electricity}" успешно отправлено на сервер`)
        event.preventDefault()
    }

    onChangeElectricity(event) {
        this.setState({ electricity: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p><input type='text' name='electricity'  placeholder='Введите электричество' value={this.state.electricity}
                                                  onChange={this.onChangeElectricity}/></p>
                <p><input type='submit' value='Отправить'/></p>
            </form>
        )
    }
}
// ReactDOM.render(<GasForm />, document.getElementById(root))