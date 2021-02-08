import React, {Component} from 'react'
import './app.css';
import GasForm from "../gasForm/gasForm";
import ElectricityForm from "../electricityForm";
import PostForm from "../../services/PostForm";
import Menu from '../menu'
import TechnologyForm from "../technology";
import MiniDrawer from "../panel";

export default class App extends Component {

     async postData() {

         try {

             let result = await fetch('https://webhook.site/5ad8c734-1904-4ba4-b06a-4f3d4401a863', {
                 method: 'post',
                 mode: 'no-cors',
                 headers: {
                     'Accept': 'application/json',
                     'Content-type': 'application/json',
                 },
                 body: JSON.stringify({
                     id: 6,
                     date: '2021-02-08',
                     name: 'Svetka',
                     meter: '100500',
                     price: 5
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

