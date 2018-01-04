import React, { Component } from 'react';
import './CounterTypesSelector.css';
import CounterTypes from './Model.js'

class CounterTypesSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {active: [...Array(CounterTypes.length).keys()]};
  }

  handleChange() {
    var st = this.interpretState();
    this.setState(st);
    this.props.onChange(st);
  }

  refForInt(i) {
    return "CounterType"+i;
  }

  interpretState() {
    var activeList = [];
    for (var i = 0; i < CounterTypes.length; i++) {
      var cb = this.refs[this.refForInt(i)];
      if (cb.checked) {
        activeList.push(i);
      }
    }
    var newState = {active: activeList};
    return newState;
  }

  render() {
    var changeFunc = () => {this.handleChange()};
    return (
      <div className="CounterTypesSelector">
        {
          CounterTypes.map(function(item, i){
            return <label key={this.refForInt(i)}><input type="checkbox" checked={this.state.active.includes(i)} onChange={changeFunc} ref={this.refForInt(i)}/>{item.kanji}</label>;
          }.bind(this))
        }
      </div>
    );
  }
}

export default CounterTypesSelector;