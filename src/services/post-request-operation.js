import React, { Component } from "react";

export default class PostRequestOperation extends Component{
    constructor(props) {
        super(props)

        this.state = {
            technology_Id: '',
            name: "",
            standard: '',
            ration: '',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    submitHandler = (e) => {
        e.preventDefault();
        fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add/` + this.state.technology_Id, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // technology_Id: e.target.technology_Id.value,
                name: e.target.name.value,
                standard: e.target.standard.value,
                ratio: e.target.ratio.value,
            })
        }).then(response => response.json())
        // .then(data => {
        //     console.log('Data from response: ', data);
        //     this.setState({forecasts: [...this.state.forecasts, data]})
        // });
    }


    render() {
        const { technology_Id, name, standard, ratio } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder='id технологии'
                            type='text'
                            name='technology_Id'
                            value={technology_Id}
                            onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='операция'
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='стандарт'
                               type='text'
                               name='standard'
                               value={standard}
                               onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='ратио'
                               type='text'
                               name='ratio'
                               value={ratio}
                               onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        )
    }


}












