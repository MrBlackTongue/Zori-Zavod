import React, { Component } from "react";
import ZoriZavodService from "../../services/zori-zavod-service";

export default class PostRequestOperation extends Component{
    constructor(props) {
        super(props)


        this.state = {
            technology: null,
            name: "",
            standard: '',
            ration: '',
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
        const { technologyId } = this.props
        if (!technologyId) {
            return;
        }

        this.zoriZavodService
            .getTechnology(technologyId)
            .then((technology) => {
                this.setState({ technology })
            })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        alert(`Новая операция " ${e.target.name.value}" успешно добавлена к технологии ${this.state.technology.name}!`)
        e.preventDefault();
        fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add/${this.state.technology.id}/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
        const { name, standard, ratio } = this.state
        return (
            <div>
                <br/>
                <p>Добавить новую операцию</p>
                <form onSubmit={this.submitHandler} className='form-inline'>
                    <div>
                        <input placeholder='операция'
                            type='text'
                            name='name'
                            value={name}
                               className='form-group mx-sm-2 mb-2'
                            onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='стандарт'
                               type='text'
                               name='standard'
                               value={standard}
                               className='form-group mx-sm-2 mb-2'
                               onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='коэффициент'
                               type='text'
                               name='ratio'
                               value={ratio}
                               className='form-group mx-sm-2 mb-2'
                               onChange={this.changeHandler}/>
                    </div>
                    <button type='submit' className='btn btn-success mb-2'>Добавить</button>
                </form>
            </div>
        )
    }


}












