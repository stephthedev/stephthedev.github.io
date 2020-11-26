import React, { Component } from 'react';

import ExchangeRate from '../../../../src-jekyll/dist/exchange-rate.min.js';
import CalculatorDisplay from '../display/CalculatorDisplay'
import PerPersonResult from './PerPersonResult'

export default class CoinExchange extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      cp: 0,
      ep: 0,
      sp: 0,
      gp: 0,
      pp: 0,
      partySize: 1,
      isCSGOnly: true,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();
    if ("csgCoins" == e.target.name) {
        this.setState({
          isCSGOnly: e.target.checked
        });
    } else {
      let valueAsInt = this.parseIntSafe(e.target.value);
      this.setState({
        [e.target.name]: valueAsInt
      });
    }
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

  getPerPersonResults = (coins) => {
    const coinOpts = this.state.isCSGOnly ? ["cp", "sp", "gp"] : [];

    const results = ExchangeRate.teamSplit(this.state.partySize, 
          coins, 
          coinOpts);

    //Construct a map of results to the count of that result
    const shareMap = {};
    for (let share of results) {
      let shareStr = this.toCoinStr(share);
      if (!shareMap.hasOwnProperty(shareStr)) {
        shareMap[shareStr] = {
          result: share,
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
    if (prevState == undefined ||
      !(prevState.cp == this.state.cp &&
      prevState.sp == this.state.sp &&
      prevState.ep == this.state.ep &&
      prevState.gp == this.state.gp &&
      prevState.pp == this.state.pp &&
      prevState.isCSGOnly == this.state.isCSGOnly &&
      prevState.partySize == this.state.partySize)) {

      const coins = {
        cp: this.state.cp,
        sp: this.state.sp,
        ep: this.state.ep,
        gp: this.state.gp,
        pp: this.state.pp,
      }

      //TODO: There should be another way to do this
      if (coins.cp == 0 && coins.sp == 0 && coins.ep == 0 
        && coins.gp == 0 && coins.pp == 0) {
        this.setState({
          humanReadableResult: "",
        });
        return;
      }
      

      this.setState({
        humanReadableResult: this.getPerPersonResults(coins),
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
                name="csgCoins" onChange={this.onChange} checked={this.state.isCSGOnly}>
                </input>
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
