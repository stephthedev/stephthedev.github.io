import React, { Component } from 'react';

class CalculatorDisplay extends Component { 

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row mt-2">
        <div class="col-md-3">
          <div class="card">
              <div class="card-header">Instructions</div>
              <div class="card-body">
                  {this.props.instructions}
              </div>
          </div>
        </div>

        <div class="col-md-6">
          {this.props.form}
        </div>

        <div class="col-md-3">
          <div id="result" class="alert alert-info">
              <h5>Results</h5>
              <span name="placeholder">
                {this.props.result}
              </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
