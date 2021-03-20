import React, {Component} from "react";

export default class PostRequestTech extends Component{

    constructor(props) {
        super(props)

        this.state = {
            name: "",
        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        alert(`Новая технология " ${e.target.name.value}" успешно добавлена!`)
        e.preventDefault();
        fetch('http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.name.value,
                // email: e.target.email.value,
            })
        }).then(response => response.json())
            // .then(data => {
            //     console.log('Data from response: ', data);
            //     this.setState({forecasts: [...this.state.forecasts, data]})
            // });
    }

    render() {
        const { name } = this.state

        return (
            <div>
                    <form onSubmit={this.submitHandler} className='form-inline'>
                        <div className="form-group mb-2">
                            <label className="col-form-label">Введите новую технологию:</label>
                        </div>
                        <div className='form-group mx-sm-2 mb-2'>
                            <input
                                className="form-control"
                                placeholder=''
                                type='text'
                                name='name'
                                value={name}
                                onChange={this.changeHandler}/>
                        </div>
                        <input type='submit' value="Добавить" className='btn btn-success mb-2'/>
                    </form>
            </div>
        )
    }
}












