import React from "react";
import './fetch-request.css'

export default class FetchRequest extends React.Component {
    state = {
        loading: true,
        operations: [],
        technology: [],
        technology_Id: ''
    };

    async componentDidMount() {
        const url = `http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/all`

        const url2 = `http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/`

        const responce = await fetch(url)
        const data = await responce.json()

        this.setState({technology: data, loading: false})
        console.log(data);

    }

    onClick = () => {

        const menuElem = document.getElementById('technology');

        const titleElem = menuElem.querySelector('.title');

        titleElem.onclick = function() {
            menuElem.classList.toggle('open');
        };

        // document.getElementById('operations').hidden = false
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.technology.length) {
            return <div>didn't get a technology</div>
        }

        return (
            <div>
                {this.state.technology.map((technology) => (
                    <div key={technology} id='technology' className='menu'>
                        <span onClick={this.onClick} className='title'>Технология: {technology.name}</span>
                        {/*<li>id = {technology.id}</li>*/}



                        <ul
                            // id='operations'hidden
                        >operations: {technology.operations.map(
                            (operation) => (
                                <li key={operation}>
                                    {/*<div>id: {operation.id}</div>*/}
                                    <div>{operation.name}</div>
                                    {/*<div>{operation.technology}</div>*/}
                                    {/*<div>standard: {operation.standard}</div>*/}
                                </li>
                            )
                        )}</ul>




                        {/*<div>{this.state.technology.operations}</div>*/}
                        {/*<div>{this.state.test.name.first}</div>*/}
                        {/*<div>{this.state.test.operations[]}</div>*/}
                        {/*<div>{this.state.technology.name.last}</div>*/}
                    </div>

                ))}
            </div>
        )
    }
}