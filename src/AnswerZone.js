import React, { Component } from 'react';
import './AnswerZone.css';

class AnswerZone extends Component {

  constructor(props) {
    super(props);
    this.state = {flippedAns: false, flippedDesc: false, answer: props.answer, counterDesc: props.desc};
  }

  componentWillReceiveProps(nextProps){
    this.setState({answer:nextProps.answer, counterDesc: nextProps.desc});
  }
  
  mouseOutAnswer() {
    this.setState((prevState, props) => {
      return {flippedAns: false};
    });
  }
  
  mouseOverAnswer() {
    this.setState((prevState, props) => {
      return {flippedAns: true};
    });
  }

  mouseOutDesc() {
    this.setState((prevState, props) => {
      return {flippedDesc: false};
    });
  }
  
  mouseOverDesc() {
    this.setState((prevState, props) => {
      return {flippedDesc: true};
    });
  }

  mouseClickAnswer() {
    this.setState((prevState, props) => {
      return {flippedAns: !prevState.flippedAns};
    });
  }

  mouseClickDesc() {
    this.setState((prevState, props) => {
      return {flippedAns: !prevState.flippedDesc};
    });
  }


  render() {
    var answerText = this.state.flippedAns ? this.state.answer : "Hover for answer";
    var descText = this.state.flippedDesc ? this.state.counterDesc : "Hover for counter description";
    return (
      <div className="AnswerZone">
        <div className="AnswerZoneAnswer" onClick={() => this.mouseClickAnswer()} onMouseOut={() => this.mouseOutAnswer()} onMouseOver={() => this.mouseOverAnswer()}>
          {answerText}
        </div>
        <div className="AnswerZoneCounterDesc" onClick={() => this.mouseClickDesc()} onMouseOut={() => this.mouseOutDesc()} onMouseOver={() => this.mouseOverDesc()}>
          {descText}
        </div>
      </div>
    );
  }
}

export default AnswerZone;