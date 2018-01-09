import React, { Component } from 'react';
import './RangeSelector.css'

class RangeSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {minnum: 1, maxnum: 20};
  }

  handleRangeMinDown() {
    this.setState((prevState, props) => {
      let st = {minnum: prevState.minnum - 1};
      this.props.onChange(st);
      return st;
    });
  }

  handleRangeMinUp() {
    this.setState((prevState, props) => {
      let st = {minnum: prevState.minnum + 1};
      this.props.onChange(st);
      return st;
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

  handleInputChange() {
    let newMinValue = parseInt(this.refs["minRangeInput"].value);
    let newMaxValue = parseInt(this.refs["maxRangeInput"].value);

    this.setState((prevState, props) => {
      let st = {minnum: newMinValue, maxnum: newMaxValue};
      this.props.onChange(st);
      return st;
    });
  }

  render() {
    let minTxt = Number.isNaN(this.state.minnum) ? "" : this.state.minnum;
    let minInput = (
      <div className="RangeInput">
        <input type="text" size="4" value={minTxt} onChange={() => this.handleInputChange()} ref="minRangeInput" />
      </div>
    );

    let maxTxt = Number.isNaN(this.state.maxnum) ? "" : this.state.maxnum;
    let maxInput = (
      <div className="RangeInput">
        <input type="text" size="4" value={maxTxt} onChange={() => this.handleInputChange()} ref="maxRangeInput" />
      </div>
    );

    return (
      <div className="RangeSelector">
          Number Range:
          {minInput}
          -
          {maxInput}
      </div>
    );
  }
}

export default RangeSelector;
