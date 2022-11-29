import React, { Component } from 'react';
import Btn from './Btn';
import Display from './Display';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Btn value="AC" className="left-btns" />
        <Btn value="+/-" className="left-btns" />
        <Btn value="%" className="left-btns" />
        <Btn value="÷" className="right-btns" />
        <Btn value="7" className="left-btns" />
        <Btn value="8" className="left-btns" />
        <Btn value="9" className="left-btns" />
        <Btn value="x" className="right-btns" />
        <Btn value="4" className="left-btns" />
        <Btn value="5" className="left-btns" />
        <Btn value="6" className="left-btns" />
        <Btn value="-" className="right-btns" />
        <Btn value="1" className="left-btns" />
        <Btn value="2" className="left-btns" />
        <Btn value="3" className="left-btns" />
        <Btn value="+" className="right-btns" />
        <Btn value="0" className="left-btns zero-btn" />
        <Btn value="." className="left-btns" />
        <Btn value="=" className="right-btns" />
      </div>
    );
  }
}

export default Calculator;
