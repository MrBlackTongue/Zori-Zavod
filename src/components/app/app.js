import React, {Component} from 'react'
import MiniDrawer from "../panel";
import TechnologyPage from "../technology-page";
import ItemListOperation from "../item-list-operation";
import HistoryItemList from "../history-item-list";

import './App.css'

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true})
    }


    render() {

        return (

            <div className="app">

                {/*<MiniDrawer />*/}

                <TechnologyPage />

                <HistoryItemList />

                {/*<ItemListOperation />*/}


            </div>
        );
    }
}









