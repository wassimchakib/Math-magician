/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    const { className, result } = this.props;
    return (
      <div className={`${className}`}>
        {result}
      </div>
    );
  }
}

Display.defaultProps = {
  className: '',
  result: '0',
};
Display.propTypes = {
  className: PropTypes.string,
  result: PropTypes.string,
};

export default Display;
