import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  render() {

    return(
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="/">stephthedev</a>

          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

          <div class="navbar-collapse collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <NavLink 
                    activeClassName='active'
                    className='nav-link'
                    exact
                    to='/'>
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink 
                    activeClassName='active'
                    className='nav-link'
                    to='/dnd-exchange-rate'>
                    Coin Converter Calculator
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    activeClassName='active'
                    className='nav-link'
                    to='/dnd-travel-calculator'>
                    Travel Calculator
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2" href="https://twitter.com/stephthedev" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
            </div>
      </nav>
    )
  }
}