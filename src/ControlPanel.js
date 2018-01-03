import React, { Component } from 'react';
import './ControlPanel.css';
import AnswerZone from './AnswerZone.js'
import CounterTypesSelector from './CounterTypesSelector.js'
import CounterTypes from './Model.js'
import getAnswer from './Utils.js'

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

  handleRangeMinDown() {
    this.setState((prevState, props) => {
      return {minnum: prevState.minnum - 1};
    });
  }

  handleRangeMinUp() {
    this.setState((prevState, props) => {
      return {minnum: prevState.minnum + 1};
    });
  }

  handleRangeMaxDown() {
    this.setState((prevState, props) => {
      return {maxnum: prevState.maxnum - 1};
    });
  }

  handleRangeMaxUp() {
    this.setState((prevState, props) => {
      return {maxnum: prevState.maxnum + 1};
    });
  }

  handleRegen() {
    let num = this.getNumber();
    let ct = this.getCounterType();
    let ans = getAnswer(num, ct);
    let params = {num:num, counterType:ct, ans:ans};
    this.props.onRegen(params);
    this.setState(params)
  }

  typesChanged(params) {
    this.setState(params);
  }

  render() {
    var ans = getAnswer(this.state.num, this.state.counterType);
    return (
      <div className="ControlPanel">
          <div className="RangeSelector">
            Number Range:
            <button className="RangeButton Down" onClick={() => this.handleRangeMinDown()} />
            {this.state.minnum}
            <button className="RangeButton Up" onClick={() => this.handleRangeMinUp()} />
            -
            <button className="RangeButton Down" onClick={() => this.handleRangeMaxDown()} />
            {this.state.maxnum}
            <button className="RangeButton Up" onClick={() => this.handleRangeMaxUp()} />
          </div>

          <CounterTypesSelector onChange={(params) => {this.typesChanged(params);}} />

          <AnswerZone answer={this.state.ans} />

          <button className="RegenButton" onClick={() => this.handleRegen()} >Regenerate</button>
      </div>
    );
  }
}

export default ControlPanel;