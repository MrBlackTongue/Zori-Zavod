import React, {Component} from 'react'
import './app.css';
import GasForm from "../gasForm/gasForm";
import ElectricityForm from "../electricityForm";
import PostForm from "../../services/PostForm";

export default class App extends Component {
    render() {
        return (

            <div className="App">
                {/*<Header />*/}
                <div className='row'>
                    <div className='col'>
                        <GasForm />
                    </div>
                    <div className='col'>
                        <ElectricityForm />
                    </div>
                </div>
                <PostForm />
                {/*<GasPrice />*/}
                {/*<ElectricityPrice />*/}
                {/*<Statistics />*/}
                {/*<History />*/}
            </div>
        );
    }
}

