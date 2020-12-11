import React, { Component } from 'react';
import TravelCalculator from 'dnd-travel-calculator';

import CalculatorDisplay from '../../display/CalculatorDisplay'
import LandTravelCaption from './LandTravelCaption';

export default class LandTravelCalculator extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      normalMiles: '',
      difficultMiles: '',
      pace: 'normal',
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
      !(prevState.normalMiles == this.state.normalMiles &&
      prevState.difficultMiles == this.state.difficultMiles &&
      prevState.pace == this.state.pace)) {
      
      const result = TravelCalculator.calculateTravelTimeByLand(
        this.state.normalMiles, 
        this.state.difficultMiles, 
        this.state.pace
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
          <label for="normalMiles">Total Miles in Normal Terrain</label>
          <input id="normalMiles" class="form-control" type="tel" name="normalMiles" maxlength="10" 
            onChange={this.handleChange} value={this.state.normalMiles}></input>
        </div>

        <div class="form-group">
          <label for="diffMiles">Total Miles in Difficult Terrain</label>
          <input id="diffMiles" class="form-control" type="tel" name="difficultMiles" maxlength="10" 
            onChange={this.handleChange} value={this.state.difficultMiles}></input>
        </div>
          
        <div class="form-group">
          <label for="pace">Pace</label>
          <select id="pace" name="pace" value={this.state.pace} onChange={this.handleChange}>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>
      </form>
    );
  }

  render() {
    const instructions = "Calculate total days, hours, and minutes for overland travel.";
    const form = this.renderForm();
    const caption = (<LandTravelCaption />);
    return (
      <CalculatorDisplay 
        instructions={instructions}
        form={form}
        result={this.state.humanReadableResult}
        calculatorCaption={caption}/>
    );
  }
}
