import React, { Component } from 'react';
import {render} from 'react-dom';
import TravelCalculator from './TravelCalculator.js';
import ExchangeRate from './ExchangeRate.js';
import IndexPage from './index.js';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  

class App extends Component {
 render() {
  let result = (<Route path = "/" component = {IndexPage}/>);

 	return (
    <main role="main">
      <div class="container">
       	<Router>
          <Route path = "/dnd-exchange-rate" component = {ExchangeRate} />
          <Route path = "/dnd-travel-calculator" component = {TravelCalculator} />
        </Router>
      </div>
    </main>
 	)
 }
}

render(<App />, document.getElementById('root'));