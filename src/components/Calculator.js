import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btn from './Btn';
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
    <div className="calculator">
      <Display className="result" result={item.next || item.operation || item.total || '0'} />
      <Btn value="AC" className="left-btns" onClick={handleClick} />
      <Btn value="+/-" className="left-btns" onClick={handleClick} />
      <Btn value="%" className="left-btns" onClick={handleClick} />
      <Btn value="÷" className="right-btns" onClick={handleClick} />
      <Btn value="7" className="left-btns" onClick={handleClick} />
      <Btn value="8" className="left-btns" onClick={handleClick} />
      <Btn value="9" className="left-btns" onClick={handleClick} />
      <Btn value="x" className="right-btns" onClick={handleClick} />
      <Btn value="4" className="left-btns" onClick={handleClick} />
      <Btn value="5" className="left-btns" onClick={handleClick} />
      <Btn value="6" className="left-btns" onClick={handleClick} />
      <Btn value="-" className="right-btns" onClick={handleClick} />
      <Btn value="1" className="left-btns" onClick={handleClick} />
      <Btn value="2" className="left-btns" onClick={handleClick} />
      <Btn value="3" className="left-btns" onClick={handleClick} />
      <Btn value="+" className="right-btns" onClick={handleClick} />
      <Btn value="0" className="left-btns zero-btn" onClick={handleClick} />
      <Btn value="." className="left-btns" onClick={handleClick} />
      <Btn value="=" className="right-btns" onClick={handleClick} />
    </div>
  );
};

export default Calculator;
