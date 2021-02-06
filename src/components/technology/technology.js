import React from 'react'

import './technology.css'

class TechnologyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {technology: 'JavaScript'};

        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeSelect(event) {
        this.setState({technology: event.target.value});
    }

    onSubmit(event) {
        alert(`По цукатам отправлена операция: ${this.state.technology}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Цукаты:
                    <select value={this.state.technology} onChange={this.onChangeSelect}>
                        <option value="Чистка">Чистка</option>
                        <option value="Посол">Посол</option>
                        <option value="Дробление">Дробление</option>
                        <option value="Загрузка">Загрузка</option>
                        <option value="Варка">Варка</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>

        );
    }
}

export default TechnologyForm