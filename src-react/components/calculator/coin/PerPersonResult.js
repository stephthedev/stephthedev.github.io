import React, { Component } from 'react';

export default class PerPersonResult extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {result, count} = this.props.result;
    const {pp, gp, sp, ep, cp} = result;

    if (count == 0) {
      return (<span></span>);
    }

    return (
      <li>
        <span>({count}x) </span>
        {pp > 0 && 
          <span>{pp}pp </span>
        }
        {gp > 0 && 
          <span>{gp}gp </span>
        }
        {ep > 0 && 
          <span>{ep}ep </span>
        }
        {sp > 0 && 
          <span>{sp}sp </span>
        }
        {cp > 0 && 
          <span>{cp}cp</span>
        }
      </li>
    )
  }
}