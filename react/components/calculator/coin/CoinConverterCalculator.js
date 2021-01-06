import React, { Component } from 'react';
import ExchangeRate from 'dnd-exchange-rate';

import CalculatorDisplay from '../display/CalculatorDisplay';
import PerPersonResult from './PerPersonResult';
import CoinConverterCaption from "./CoinConverterCaption";

export default class CoinConverterCalculator extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      cp: 0,
      ep: 0,
      sp: 0,
      gp: 0,
      pp: 0,
      partySize: 1,
      isCSGOnly: true
    };

    this.onChange = this.onChange.bind(this);
  }

  onCheckboxChange = (e) => {
    this.setState({
      isCSGOnly: e.target.checked
    });
  }

  onChange = (e) => {
    let valueAsInt = this.parseIntSafe(e.target.value);
    this.setState({
      [e.target.name]: valueAsInt
    });
  }

  toCoinStr = (result) => {
    let str = "";
    for (let coinType in result) {
      let amount = result[coinType];
      if (amount > 0) {
        str = str.concat(amount, coinType, " ");
      }
    }

    //No coins at all
    if (str.length == 0) {
        str = "No coins ";
    }
    return str;
  }

  parseIntSafe = (value) => {
    try {
      return parseInt(value) || 0;
    } catch(error) {
    }
    return 0;
  }

  getPerPersonResults = (coins, coinOpts) => {
    const { partySize } = this.state;

    //1. Team split
    const teamResults = ExchangeRate.teamSplit(partySize, 
          coins, 
          coinOpts);

    //Construct a map of results to the count of that result
    const shareMap = {};
    for (let share of teamResults) {
      const optimalResult = ExchangeRate.optimalExchange(share, coinOpts);
      const shareStr = this.toCoinStr(optimalResult);
      if (!shareMap.hasOwnProperty(shareStr)) {
        shareMap[shareStr] = {
          result: optimalResult,
          count: 0
        }
      }
      shareMap[shareStr].count += 1;
    }

    //Create a react component for each result
    let perPersonResults = [];
    for (let share of Object.values(shareMap)) {
      let perPersonResult = (<PerPersonResult result={share} />);
      perPersonResults.push(perPersonResult);
    }

    return perPersonResults;
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    const { cp, sp, ep, gp, pp, isCSGOnly, partySize } = this.state;

    if (prevState == undefined ||
      !(prevState.cp == cp &&
      prevState.sp == sp &&
      prevState.ep == ep &&
      prevState.gp == gp &&
      prevState.pp == pp &&
      prevState.isCSGOnly == isCSGOnly &&
      prevState.partySize == partySize)) {

      const coins = { cp, sp, ep, gp, pp };

      //TODO: There should be another way to do this
      if (coins.cp == 0 && coins.sp == 0 && coins.ep == 0 
        && coins.gp == 0 && coins.pp == 0) {
        this.setState({
          humanReadableResult: "",
        });
        return;
      }
      
      const coinOpts = isCSGOnly ? ["cp", "sp", "gp"] : [];

      this.setState({
        humanReadableResult: this.getPerPersonResults(coins, coinOpts),
      });
    }
  }

  renderForm() {
    return (
      <form class="form-horizontal">
        <div class="form-group mr-1">
            <label for="id">Copper</label>
            <input class="form-control" type="tel" id="cp" name="cp"
              onChange={this.onChange}></input>
        </div>

        <div class="form-group">
            <label for="sp">Silver</label>
            <input class="form-control" type="tel" id="sp" name="sp"
            onChange={this.onChange}></input>
        </div>

        <div class="form-group">
            <label for="ep">Electrum</label>
            <input class="form-control" type="tel" id="ep" name="ep"
              onChange={this.onChange}></input>
        </div>

        <div class="form-group">
            <label for="gp">Gold</label>
            <input class="form-control" type="tel" id="gp" name="gp"
              onChange={this.onChange}></input>
        </div>

        <div class="form-group">
            <label for="pp">Platinum</label>
            <input class="form-control" type="tel" id="pp" name="pp"
              onChange={this.onChange}></input>
        </div>

        <div class="form-group">
            <label for="partySize">Party Size</label>
            <input class="form-control" type="tel" id="partySize" 
              name="partySize" maxlength="2" onChange={this.onChange}>
            </input>
        </div>
        
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="csgCoins" 
                name="csgCoins" onChange={this.onCheckboxChange} defaultChecked>
                </input>
                Exchange only for copper, silver, and gold
            </label> 
        </div>
      </form>
    );
  }

  render() {
    const instructions = "Use this tool to convert lower value coins to higher value coins. Additionally, evenly split coins between team members.";
    const form = this.renderForm();
    const caption = (<CoinConverterCaption />);
    return (
      <CalculatorDisplay 
        instructions={instructions}
        form={form}
        result={this.state.humanReadableResult}
        calculatorCaption={caption}/>
    );
  }
}
