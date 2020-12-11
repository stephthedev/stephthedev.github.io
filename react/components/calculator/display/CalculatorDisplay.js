import React, { Component } from 'react';

class CalculatorDisplay extends Component { 

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="row">
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
            {this.props.result &&
              <div id="result" class="alert alert-info">
                <h5>Results</h5>
                  <span name="placeholder">
                    {this.props.result}
                  </span>
              </div>
            }
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            {this.props.calculatorCaption}
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
