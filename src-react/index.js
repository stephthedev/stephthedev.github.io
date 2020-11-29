import React, { Component } from 'react';
import {render} from 'react-dom';

class IndexPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row">
          <div class="col-md-12 center">
            <h1 class="jumbotron-heading">Stephanie Ortiz</h1>
            <p class="lead text-muted">Lead software engineer</p>
          </div>

          <div class="col-md-12">
            <span>D&amp;D utilities</span>
            <ul class="list-group list-unstyled">
              <li>
                <a class="list-group-item" href="/dnd-exchange-rate.html">Coin Converter Calculator</a>
              </li>
              <li>
                <a class="list-group-item" href="/dnd-exchange-rate.html">Coin Converter</a>
              </li>
            </ul>
          </div>
      </div>
        );
    }
}

export default IndexPage;