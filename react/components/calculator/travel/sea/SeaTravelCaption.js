import React, { Component } from 'react';

export default class SeaTravelCaption extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="table-responsive mt-3">
      <table class="table table-bordered table-striped table-responsive-xs">
        <caption>  
          <a target="_blank" href="https://www.dndbeyond.com/vehicles">
            Ship Travel Pace*
          </a>
        </caption>
        <thead>
          <th>Ship</th>
          <th>Miles Per Day</th>
        </thead>
        <tbody>
          <tr>
            <td>Rowboat</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Keelboat</td>
            <td>72</td>
          </tr>
          <tr>
            <td>Galley</td>
            <td>96</td>
          </tr>
          <tr>
            <td>Warship</td>
            <td>96</td>
          </tr>
          <tr>
            <td>Longship</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Sailing Ship</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}