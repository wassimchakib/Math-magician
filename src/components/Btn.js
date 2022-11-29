/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Btn extends Component {
  render() {
    const { value, className } = this.props;
    return (
      <button type="button" className={`${className}`}>
        {value}
      </button>
    );
  }
}

Btn.defaultProps = {
  value: 0,
  className: '',
};

Btn.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Btn;
