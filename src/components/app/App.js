import React, {Component} from 'react'
import './app.css';
import MiniDrawer from "../panel";
import TechnologyPage from "../technology-page";

import './app.css'
import FetchRequest from "../../services/fetch";

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true})
    }

    // async postData() {
    //
    //      try {
    //
    //          let result = await fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/operation/add/30`, {
    //              method: 'post',
    //              mode: 'no-cors',
    //              headers: {
    //                  'Accept': 'application/json',
    //                  'Content-type': 'application/json',
    //              },
    //              body: JSON.stringify({
    //                  "name":"Мойка коры",
    //                  "standard": 100,
    //                  "ratio": 1.2
    //              })
    //          })
    //
    //          console.log('Result: ' + result)
    //
    //      } catch(e) {
    //          console.log(e)
    //      }
    // }


    render() {

        return (

            <div className="app">

                {/*<MiniDrawer />*/}



                <FetchRequest />
                {/*<TechnologyPage />*/}



                {/*<div className='align-content-center'>*/}
                {/*    <button onClick={() => this.postData()}>Press me to post data</button>*/}
                {/*</div>*/}

            </div>
        );
    }
}









