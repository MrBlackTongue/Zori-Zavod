import React, {Component} from 'react'
import './app.css';
import MiniDrawer from "../panel";
import TechnologyPage from "../technology-page";

import './app.css'
import FetchRequest from "../../services/fetch";
import PostForm from "../../services/PostForm";
import PostRequest from "../../services/requests";

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true})
    }

    // componentDidMount() {
    //     const requestTechnology = {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json'},
    //         body: JSON.stringify({name: 'React POST Request Example'})
    //     };
    //     fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add/`, requestTechnology)
    //         .then(response => response.json())
    //         // .then(data => this.setState({name: data.id}))
    // }



    // componentDidMount() {
    //     const requestTechnology = {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json'},
    //         body: JSON.stringify({id: 10, name: 'Мойка коры', standard: 100, ratio: 1.2, technology: 10})
    //     };
    //     fetch(`http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/add/`, requestTechnology)
    //         .then(response => response.json())
    //         // .then(data => this.setState({name: data.id}))
    // }



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
    //                  name: "Sex",
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

                {/*<FetchRequest />*/}

                {/*<PostForm />*/}
                <PostRequest />

                {/*<TechnologyPage />*/}



                {/*<div className='align-content-center'>*/}
                {/*    <button onClick={() => this.postData()}>Press me to post data</button>*/}
                {/*</div>*/}

            </div>
        );
    }
}









