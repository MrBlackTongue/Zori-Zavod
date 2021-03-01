import React, { Component } from "react";

export default class PostRequest extends Component{
    constructor(props) {
        super(props)

        this.state = {
            // id: '',
            name: "",
            // operation: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    submitHandler = (e) => {
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
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder='введите технологию'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        )
    }


}












