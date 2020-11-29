import React, { Component } from 'react';
import {render} from 'react-dom';
import TravelCalculator from './components/calculator/travel/TravelCalculator';
import CoinCalculator from './components/calculator/coin/CoinConverterCalculator';
import IndexPage from './index.js';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

class App extends Component {
 render() {
 	return (
    <Router>
      <main role="main">
        <div class="container mt-3">
          <Switch>
            <Route path = "/dnd-exchange-rate" component = {CoinCalculator} />
            <Route path = "/dnd-travel-calculator" component = {TravelCalculator} />
            <Route exact path = "/" component={IndexPage} />
          </Switch>
        </div>
      </main>
    </Router>
 	)
 }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root'));