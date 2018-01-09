import React, { Component } from 'react';
import ControlPanel from './ControlPanel.js'
import './App.css';
import CounterTypes from './Model.js'

var ReactDOM = require('react-dom')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {num: 0, counterType: 0};
  }

  regenCallback(params) {
      this.setState(params);
  }

  chartClicked() {
    console.log(this.refs["myref1"].style);
    // this.refs["myref1"]
    if (this.refs["myref1"].style["opacity"]==="0") {
      console.log("0");
      this.refs["myref1"].style["opacity"] = 1;
    } else {
      console.log("1");
      this.refs["myref1"].style["opacity"] = 0;
    }
  }

  render() {

    let ansChart = this.state.chartVisible ? (<img src="chart.png" width="600" onClick={() => {this.chartClicked();}}/>) : null;

    var counterType = CounterTypes[this.state.counterType].kanji;
    return (
      <div className="App">
        <div className="Numberslot">
          <div className="Flashcard">
            {this.state.num}
          </div>
        </div>
        <div className="Nounslot">
          <div className="Flashcard">
            {counterType}
          </div>
        </div>
        <ControlPanel minnum="1" maxnum="20" onRegen={(params) => {this.regenCallback(params);}}/>

        <br />
        <img src="chart.png" width="600" onClick={() => {this.chartClicked();}} ref="myref1" />
      </div>
    );
  }
}

export default App;
