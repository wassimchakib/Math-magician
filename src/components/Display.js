/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className}`}>
        0
      </div>
    );
  }
}

Display.defaultProps = {
  className: '',
};
Display.propTypes = {
  className: PropTypes.string,
};

export default Display;
