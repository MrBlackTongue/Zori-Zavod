import React, {Component} from 'react'
import MiniDrawer from "../panel";
import TechnologyPage from "../technology-page";
import ItemListOperation from "../item-list-operation";
import HistoryItemList from "../history-item-list";

import './App.css'
import AddNewTechModal from "../modal-window";

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

                    <AddNewTechModal />

                    <TechnologyPage />

                    <HistoryItemList />


                    {/*<ItemListOperation />*/}


                </div>
        );
    }
}









