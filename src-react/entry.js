import React, { Component } from 'react';
import {render} from 'react-dom';
import LandTravelCalculator from './components/calculator/land/index';

class App extends Component {
 render() {
 	return (
 		<LandTravelCalculator></LandTravelCalculator>
 	)
 }
}

render(<App />, document.getElementById('root'));