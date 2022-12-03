/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnContainer extends Component {
  obj = [
    { value: 'AC', className: 'left-btns' },
    { value: '+/-', className: 'left-btns' },
    { value: '%', className: 'left-btns' },
    { value: '÷', className: 'right-btns' },
    { value: '7', className: 'left-btns' },
    { value: '8', className: 'left-btns' },
    { value: '9', className: 'left-btns' },
    { value: 'x', className: 'right-btns' },
    { value: '4', className: 'left-btns' },
    { value: '5', className: 'left-btns' },
    { value: '6', className: 'left-btns' },
    { value: '-', className: 'right-btns' },
    { value: '1', className: 'left-btns' },
    { value: '2', className: 'left-btns' },
    { value: '3', className: 'left-btns' },
    { value: '+', className: 'right-btns' },
    { value: '0', className: 'left-btns zero-btn' },
    { value: '.', className: 'left-btns' },
    { value: '=', className: 'right-btns' },
  ];

  render() {
    const { handleClick } = this.props;
    return (
      <div className="calculator__btns">
        {this.obj.map((object) => (
          <button
            key={object.value}
            type="button"
            className={`${object.className}`}
            onClick={handleClick}
          >
            {object.value}
          </button>
        ))}
      </div>
    );
  }
}

BtnContainer.defaultProps = {
  handleClick: () => {},
};

BtnContainer.propTypes = {
  handleClick: PropTypes.func,
};

export default BtnContainer;
