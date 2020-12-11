import React, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom'

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
                <Link to='/dnd-exchange-rate'>Coin Converter Calculator</Link>
              </li>
              <li>
                <Link to='/dnd-travel-calculator'>Travel Calculator</Link>
              </li>
            </ul>
          </div>
      </div>
        );
    }
}

export default IndexPage;