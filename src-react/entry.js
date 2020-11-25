import React, { Component } from 'react';
import {render} from 'react-dom';
import TravelCalculator from './TravelCalculator.js';
import ExchangeRate from './ExchangeRate.js';

class App extends Component {
 render() {
 	return (
 		<ExchangeRate></ExchangeRate>
 	)
 }
}

render(<App />, document.getElementById('root'));