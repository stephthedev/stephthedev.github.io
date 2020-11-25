import React, { Component } from 'react';
import ExchangeRate from '../../../../src-jekyll/dist/exchange-rate.min.js';
import CalculatorDisplay from '../display/CalculatorDisplay'

class CoinExchange extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      cp: '',
      ep: '',
      sp: '',
      gp: '',
      pp: ''
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
      !(prevState.cp == this.state.cp &&
      prevState.ep == this.state.ep)) {
      
      //TODO:


      /*const resultStr = result.days + "d " +result.hours + "h " + result.minutes + "m";
      this.setState({
        humanReadableResult: resultStr,
      })*/
    }
  }

  renderForm() {
    return (
      <form class="form-horizontal">
        <div class="form-group mr-1">
            <label for="id">Copper</label>
            <input class="form-control" type="tel" id="cp" name="cp"></input>
        </div>

        <div class="form-group">
            <label for="sp">Silver</label>
            <input class="form-control" type="tel" id="sp" name="sp"></input>
        </div>

        <div class="form-group">
            <label for="ep">Electrum</label>
            <input class="form-control" type="tel" id="ep" name="ep"></input>
        </div>

        <div class="form-group">
            <label for="gp">Gold</label>
            <input class="form-control" type="tel" id="gp" name="gp"></input>
        </div>

        <div class="form-group">
            <label for="pp">Platinum</label>
            <input class="form-control" type="tel" id="pp" name="pp"></input>
        </div>

        <div class="form-group">
            <label for="partySize">Team Size</label>
            <input class="form-control" type="tel" id="partySize" name="partySize" maxlength="2"></input>
        </div>
        
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="csgCoins" name="csgCoins"></input>
                Exchange only for copper, silver, and gold
            </label> 
        </div>
      </form>
    );
  }

  render() {
    let instructions = "Use this tool to convert lower value coins to higher value coins. Additionally, evenly split coins between team members.";
    let form = this.renderForm();
    return (
      <CalculatorDisplay 
        instructions={instructions}
        form={form}
        result={this.state.humanReadableResult}/>
    );
  }
}

export default CoinExchange;
