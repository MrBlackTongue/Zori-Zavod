import React, {Component} from 'react'
import './app.css';
import GasForm from "../gasForm/gasForm";
import ElectricityForm from "../electricityForm";
import PostForm from "../../services/PostForm";
import Menu from '../menu'
import TechnologyForm from "../technology";
import MiniDrawer from "../panel";
import OperationDetails from "../operation-details/operation-details";

export default class App extends Component {

     async postData() {

         try {

             let result = await fetch('http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/', {
                 method: 'post',
                 mode: 'no-cors',
                 headers: {
                     'Accept': 'application/json',
                     'Content-type': 'application/json',
                 },
                 body: JSON.stringify({
                     "name":"Мойка коры",
                     "standard": 100,
                     "ratio": 1.2
                 })
             })

             console.log('Result: ' + result)

         } catch(e) {
             console.log(e)
         }
    }


    render() {
        return (

            <div className="App">

                <MiniDrawer />
                <div className='align-content-center'>
                    <button onClick={() => this.postData()}>Press me to post data</button>
                </div>

                <div>
                    <OperationDetails />
                </div>


                {/*<div>*/}
                {/*    <Menu />*/}
                {/*</div>*/}

                {/*<div className='float-right'>*/}
                {/*    <TechnologyForm />*/}
                {/*</div>*/}

                {/*<Header />*/}

                {/*<div className='row'>*/}
                {/*    <div className='col'>*/}
                {/*        <GasForm />*/}
                {/*    </div>*/}

                {/*    <div className='col'>*/}
                {/*        <ElectricityForm />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<PostForm />*/}

                {/*<GasPrice />*/}

                {/*<ElectricityPrice />*/}

                {/*<Statistics />*/}

                {/*<History />*/}
            </div>
        );
    }
}

