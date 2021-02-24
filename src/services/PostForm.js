import React, { Component } from "react";
import axios from "axios";
export class PostForm extends Component {
    constructor(props) {
        super(props);

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
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:5000/api/tech/add/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { name, } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        type='text'*/}
                    {/*        name='id'*/}
                    {/*        value={id}*/}
                    {/*        onChange={this.changeHandler}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.changeHandler}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        type='text'*/}
                    {/*        name='operation'*/}
                    {/*        value={operation}*/}
                    {/*        onChange={this.changeHandler}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        )
    }
}

export default PostForm