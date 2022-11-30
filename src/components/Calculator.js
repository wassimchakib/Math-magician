import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Btn from './Btn';
import Display from './Display';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newObj = calculate(this.state, e.target.textContent);
    this.setState(newObj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display className="result" result={next || operation || total || '0'} />
        <Btn value="AC" className="left-btns" onClick={this.handleClick} />
        <Btn value="+/-" className="left-btns" onClick={this.handleClick} />
        <Btn value="%" className="left-btns" onClick={this.handleClick} />
        <Btn value="÷" className="right-btns" onClick={this.handleClick} />
        <Btn value="7" className="left-btns" onClick={this.handleClick} />
        <Btn value="8" className="left-btns" onClick={this.handleClick} />
        <Btn value="9" className="left-btns" onClick={this.handleClick} />
        <Btn value="x" className="right-btns" onClick={this.handleClick} />
        <Btn value="4" className="left-btns" onClick={this.handleClick} />
        <Btn value="5" className="left-btns" onClick={this.handleClick} />
        <Btn value="6" className="left-btns" onClick={this.handleClick} />
        <Btn value="-" className="right-btns" onClick={this.handleClick} />
        <Btn value="1" className="left-btns" onClick={this.handleClick} />
        <Btn value="2" className="left-btns" onClick={this.handleClick} />
        <Btn value="3" className="left-btns" onClick={this.handleClick} />
        <Btn value="+" className="right-btns" onClick={this.handleClick} />
        <Btn value="0" className="left-btns zero-btn" onClick={this.handleClick} />
        <Btn value="." className="left-btns" onClick={this.handleClick} />
        <Btn value="=" className="right-btns" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
