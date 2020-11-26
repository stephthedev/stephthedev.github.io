import React, { Component } from 'react';
import {render} from 'react-dom';

class IndexPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">Stephanie Ortiz</h1>
                <p class="lead text-muted">Lead software engineer.</p>
              </div>
            </section>
        );
    }
}

export default IndexPage;