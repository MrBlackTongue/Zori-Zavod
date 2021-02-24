import React, {Component} from 'react'
import './app.css';
import MiniDrawer from "../panel";
import TechnologyPage from "../technology-page";

import './app.css'
import FetchRequest from "../../services/fetch";
import PostForm from "../../services/PostForm";

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
    //          let result = await fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add/`, {
    //              method: 'POST',
    //              mode: 'no-cors',
    //              headers: {
    //                  'Accept': 'application/json',
    //                  'Content-type': 'application/json',
    //              },
    //              body: JSON.stringify({
    //                  id: 3,
    //                  name:"Джем",
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

                <PostForm />
                {/*<TechnologyPage />*/}



                {/*<div className='align-content-center'>*/}
                {/*    <button onClick={() => this.postData()}>Press me to post data</button>*/}
                {/*</div>*/}

            </div>
        );
    }
}









