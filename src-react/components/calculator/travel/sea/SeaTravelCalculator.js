import React, { Component } from 'react';
import TravelCalculator from '../../../../../src-jekyll/dist/travel-calculator.min.js';
import CalculatorDisplay from '../../display/CalculatorDisplay'
import SeaTravelCaption from './SeaTravelCaption';

class SeaTravelCalculator extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      nauticalMiles: '',
      ship: 'keelboat',
      humanReadableResult: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevState == undefined ||
      !(prevState.ship == this.state.ship &&
      prevState.nauticalMiles == this.state.nauticalMiles)) {
      
      const result = TravelCalculator.calculateTravelTimeBySea(
        this.state.nauticalMiles, 
        this.state.ship
      );

      const resultStr = result.days + "d " +result.hours + "h " + result.minutes + "m";
      this.setState({
        humanReadableResult: resultStr,
      })
    }
  }

  renderForm() {
    return (
      <form class="form-horizontal">
            <div class="form-group mr-1">
                <label for="nautical-miles">Total Miles</label>
                <input class="form-control" type="tel" id="nautical-miles" name="nauticalMiles" maxlength="10"
                  onChange={this.handleChange} value={this.state.nauticalMiles} ></input>
            </div>
            
            <div class="form-group">
                <label for="ship">Ship</label>
                <select id="ship" name="ship" 
                  value={this.state.ship} onChange={this.handleChange}>
                  <option value="galley">Galley</option>
                  <option value="keelboat" selected>Keelboat</option>
                  <option value="longship">Longship</option>
                  <option value="rowboat">Rowboat</option>
                  <option value="sailingship">Sailing Ship</option>
                  <option value="warship">Warship</option>
                </select>
            </div>
        </form>
    );
  }

  render() {
    const instructions = "Calculate total days, hours, and minutes for sea travel";
    const form = this.renderForm();
    const caption = (<SeaTravelCaption />);
    return (
      <CalculatorDisplay 
        instructions={instructions}
        form={form}
        result={this.state.humanReadableResult}
        calculatorCaption={caption}/>
    );
  }
}

export default SeaTravelCalculator;
