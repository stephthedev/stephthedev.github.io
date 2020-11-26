import React, { Component } from 'react';

export default class CoinConverterCaption extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="table-responsive mt-3">
        <table class="table table-bordered table-striped table-responsive-xs">
          <caption>  
            <a target="_blank" href="https://www.dndbeyond.com/sources/phb/equipment#Coinage">
              Conversion Rate
            </a>
          </caption>
          <thead>
            <th>Coin</th>
            <th>cp</th>
            <th>sp</th>
            <th>ep</th>
            <th>gp</th>
            <th>pp</th>
          </thead>
          <tbody>
            <tr>
              <td>Copper (cp)</td>
              <td>1</td>
              <td>1/10</td>
              <td>1/50</td>
              <td>1/100</td>
              <td>1/1,000</td>
            </tr>
            <tr>
              <td>Silver (sp)</td>
              <td>10</td>
              <td>1</td>
              <td>1/5</td>
              <td>1/10</td>
              <td>1/100</td>
            </tr>
            <tr>
              <td>Electrum (ep)</td>
              <td>50</td>
              <td>5</td>
              <td>1</td>
              <td>1/2</td>
              <td>1/20</td>
            </tr>
            <tr>
              <td>Gold (gp)</td>
              <td>100</td>
              <td>10</td>
              <td>2</td>
              <td>1</td>
              <td>1/10</td>
            </tr>
            <tr>
              <td>Platinum (pp)</td>
              <td>1,000</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}