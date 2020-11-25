import React, { Component } from 'react';
import {render} from 'react-dom';
import LandTravelCalculator from './components/calculator/travel/land/LandTravelCalculator';
import SeaTravelCalculator from './components/calculator/travel/sea/SeaTravelCalculator';

class TravelCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '',
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        e.preventDefault();

        this.setState({
            activeTab: e.target.name
        });
    }



    render() {
        //Default state
        let landStyle = "nav-link active";
        let landCardStyle = "card-body";
        let seaStyle = "nav-link";
        let seaCardStyle = "d-none card-body";

        if ("land" == this.state.activeTab) {
            //Do nothing
        } 
        if ("sea" == this.state.activeTab) {
            landStyle = "nav-link";
            landCardStyle = " d-none";

            seaStyle += " active";
            seaCardStyle = "card-body";
        }
        
        return (
            <div class="card text-center">
                <div class="card-header">
                    <ul id="tabs" class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a name="land" class={landStyle} href="#" onClick={this.onClick}>By Land</a>
                        </li>
                        <li class="nav-item">
                            <a name="sea" class={seaStyle} href="#" onClick={this.onClick}>By Sea</a>
                        </li>
                    </ul>
                </div>
                <div id="card-body-by-land" class={landCardStyle}>
                    <LandTravelCalculator></LandTravelCalculator>
                </div>
                <div id="card-body-by-sea" class={seaCardStyle}>
                    <SeaTravelCalculator></SeaTravelCalculator>
                </div>
            </div>
        );
    }
}

export default TravelCalculator;