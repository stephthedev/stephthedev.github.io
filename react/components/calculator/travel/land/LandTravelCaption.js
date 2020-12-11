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
            <a target="_blank" href="https://www.dndbeyond.com/sources/basic-rules/adventuring#TravelPace">
              Travel Pace*
            </a>
            <ul>
              <li>Assumes 8 hours traveled per day</li>
              <li>Assumes the travel pace is (distance per day / hours traveled per day)</li>
              <li>Does not include time for traveling beyond 8 hours a day</li>
            </ul>
          </caption>
          <thead>
            <th>Pace</th>
            <th>Miles Per Day</th>
          </thead>
          <tbody>
            <tr>
              <td>Fast</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Slow</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}