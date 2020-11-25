import React, { Component } from 'react';
import {render} from 'react-dom';
import CoinExchange from './components/calculator/coin/CoinExchange';

class ExchangeRate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '',
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        e.preventDefault();

        this.setState({
            activeTab: e.target.name
        });
    }



    render() {
        return (
            <div>
                <CoinExchange />
            </div>
        );
    }
}

export default ExchangeRate;