/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      className: props.className,
    };
  }

  render() {
    return (
      <button type="button" className={`${this.state.className}`}>
        {this.state.value}
      </button>
    );
  }
}

export default Btn;
