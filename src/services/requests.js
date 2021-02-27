import React, { Component } from "react";

export default class PostRequest extends Component{
    constructor(props) {
        super(props)

        this.state = {
            // error: null,
            // isLoaded: false,
            // items: [],


            // id: '',
            name: "",
            // operation: ''

            // id: 10,
            // name: 'Мойка коры',
            // standard: 100,
            // ratio: 1.2,
            // technology: 10
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }



    // submitHandler = (e) => {
    //     e.preventDefault()
    //     // console.log(this.state)
    //         const requestTechnology = {
    //             method: 'POST',
    //             headers: { 'Content-type': 'application/json'},
    //             body: JSON.stringify(this.changeHandler)
    //         };
    //         fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add`)
    //             .then(response => response.json())
    //             // .then(
    //             //     (result) => {
    //             //         this.setState({
    //             //             isLoaded: true,
    //             //             items: result
    //             //         });
    //             //     }
    //             // )
    //         // .then(data => this.setState({name: data.id}))
    //
    // }

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
                // password: e.target.password.value,
                // radio: e.target.radio.value,
                // checkbox: e.target.checkbox.checked,
                // select: e.target.select.value
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
                        <input
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












