import React, {Component} from "react";
import ZoriZavodService from "../../services/zori-zavod-service";

export default class DeleteRequestTech extends Component {

    constructor(props) {
        super(props)

        this.state = {
            technology: null,
            id: "",
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

    deleteDep(depid) {
        if (window.confirm('Are you sure?'))
        {

        }
    }

    submitHandler = (e) => {

        if (window.confirm('Подтвердите удаление технологии'))
        {
            e.preventDefault();
            fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/delete/${this.state.technology.id}`, {
                method: "DELETE",
                // mode: 'cors',
                // headers: {
                //     'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                // },
                // body: JSON.stringify({
                //     name: e.target.name.value,
                //     // email: e.target.email.value,
                // })
            }).then(response => response.json())
            // .then(data => {
            //     console.log('Data from response: ', data);
            //     this.setState({forecasts: [...this.state.forecasts, data]})
            // });
        }
    }

    render() {
        const { technology } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler} className='form-inline'>
                    {/*<div className="form-group mb-2">*/}
                        {/*<label className="col-form-label">Введите новую технологию:</label>*/}
                    {/*</div>*/}
                    {/*<div className='form-group mx-sm-2 mb-2'>*/}
                    {/*    <input*/}
                    {/*        className="form-control"*/}
                    {/*        placeholder=''*/}
                    {/*        type='text'*/}
                    {/*        name='name'*/}
                    {/*        value={name}*/}
                    {/*        onChange={this.changeHandler}/>*/}
                    {/*</div>*/}
                    <input type='submit' value="Удалить" className='btn btn-danger mx-sm-2 mb-2'/>
                </form>
            </div>
        )
    }
}












