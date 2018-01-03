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

  render() {
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
        <ControlPanel minnum="0" maxnum="20" onRegen={(params) => {this.regenCallback(params);}}/>
      </div>
    );
  }
}

export default App;
