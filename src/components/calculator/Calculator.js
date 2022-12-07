import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import BtnContainer from './BtnContainer';
import Display from './Display';
import Header from '../header/Header';

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
    <>
      <Header />
      <main className="calculator">
        <div className="container">
          <h2 className="calculator__title">Let&apos;s do some math!</h2>
          <div className="calculator__container">
            <Display
              className="calculator__result"
              result={item.next || item.operation || item.total || '0'}
            />
            <BtnContainer handleClick={handleClick} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Calculator;
