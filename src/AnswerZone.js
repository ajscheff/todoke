import React, { Component } from 'react';
import './AnswerZone.css';

class AnswerZone extends Component {

  constructor(props) {
    super(props);
    this.state = {flipped: false, answer: props.answer};
  }

  componentWillReceiveProps(nextProps){
    this.setState({answer:nextProps.answer});
  }
  

  mouseOut() {
    this.setState({flipped: false});
  }
  
  mouseOver() {
    this.setState({flipped: true});
  }



  render() {
    var answerText = this.state.flipped ? this.state.answer : ""
    console.log(answerText);
    return (
      <div className="AnswerZone" onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
        <div className="AnswerZoneAnswer">
          {answerText}
        </div>
      </div>
    );
  }
}

export default AnswerZone;