import React, { useState } from 'react';
import calculate from '../logic/calculate';
import BtnContainer from './BtnContainer';
import Display from './Display';

const Calculator = () => {
  const [item, setItem] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setItem(calculate(item, e.target.textContent));
  };

  return (
    <div className="calculator__container">
      <Display className="calculator__result" result={item.next || item.operation || item.total || '0'} />
      <BtnContainer handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
