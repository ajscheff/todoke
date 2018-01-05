import React, { Component } from 'react';
import './ControlPanel.css';
import AnswerZone from './AnswerZone.js'
import CounterTypesSelector from './CounterTypesSelector.js'
import CounterTypes from './Model.js'
import getAnswer from './Utils.js'
import RangeSelector from './RangeSelector.js'

class ControlPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {num: 0, counterType: 0, ans:getAnswer(0, 0), minnum: parseInt(props.minnum), maxnum:parseInt(props.maxnum), active:[...Array(CounterTypes.length).keys()]};
  }

  componentDidMount() {
    this.handleRegen();
  }

  getNumber() {
    return Math.floor((Math.random() * (this.state.maxnum - this.state.minnum + 1)) + this.state.minnum);
  }

  getCounterType() {
    var rand = Math.floor(Math.random() * this.state.active.length);
    var index = this.state.active[rand];
    return index;
  }

  getNewParams() {
    let num = this.getNumber();
    let ct = this.getCounterType();
    return {num:num, counterType:ct};
  }

  handleRegen() {
    let newParams = this.getNewParams();
    while (newParams.num === this.state.num && newParams.counterType === this.state.counterType) {
      newParams = this.getNewParams()
    }

    newParams.ans = getAnswer(newParams.num, newParams.counterType);

    this.props.onRegen(newParams);
    this.setState(newParams)
  }

  typesChanged(params) {
    this.setState(params);
  }

  rangeChanged(params) {
    console.log(params);
    this.setState(params);
  }

  render() {
    var desc = CounterTypes[this.state.counterType].english;
    return (
      <div className="ControlPanel">
          <RangeSelector onChange={(params) => {this.rangeChanged(params);}}/>

          <CounterTypesSelector onChange={(params) => {this.typesChanged(params);}} />

          <AnswerZone answer={this.state.ans} desc={desc} />

          <button className="RegenButton" onClick={() => this.handleRegen()} >Regenerate</button>
      </div>
    );
  }
}

export default ControlPanel;