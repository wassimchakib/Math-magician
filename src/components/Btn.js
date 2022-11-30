/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { value, onClick } = this.props;
    onClick(value);
  }

  render() {
    const { value, className, onClick } = this.props;
    return (
      <button type="button" className={`${className}`} onClick={onClick}>
        {value}
      </button>
    );
  }
}

Btn.defaultProps = {
  value: 0,
  className: '',
  onClick: () => {},
};

Btn.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Btn;
