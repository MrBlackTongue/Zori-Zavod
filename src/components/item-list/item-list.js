import React, { Component } from 'react';

import './item-list.css';
import ZoriZavodService from "../../services/zori-zavod-service";
import Spinner from "../spinner/spinner";
import PostRequestTech from "../post-request-tech";

export default class ItemList extends Component {

    zoriZavodService = new ZoriZavodService();

    state = {
        technologyList: null
    };

    componentDidMount() {
        this.zoriZavodService.getAllTechnologies()
            .then((technologyList) => {
                this.setState({
                    technologyList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const { technologyList } = this.state;

        if (!technologyList) {
            return <Spinner />;
        }

        const items = this.renderItems(technologyList);

        return (
            <div>
                <PostRequestTech />

                <ul className="item-list list-group">
                    {items}
                </ul>
            </div>

        );
    }
}
