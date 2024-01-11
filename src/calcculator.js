import React, { useState, useEffect } from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [resultChanged, setResultChanged] = useState(false);

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        setDisplay('0');
        break;
      case '=':
        try {
          const expression = display.replace(/x/g, '*');
          setDisplay(eval(expression).toString());
          setResultChanged(true);
        } catch (error) {
          setDisplay('Error');
        }
        break;
      case '*':
        setDisplay((prevDisplay) => (prevDisplay === '0' ? 'x' : prevDisplay + 'x'));
        break;
      default:
        setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
        break;
        case '%':
      // Handle percentage calculation
      try {
        const percentage = eval(display) / 100;
        setDisplay(percentage.toString());
        setResultChanged(true);
      } catch (error) {
        setDisplay('Error');
      }
      break;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setResultChanged(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [display]);

  // JSX for the calculator component
  return (
    <div className={`calculator ${resultChanged ? 'result-changed' : ''}`}>
      <div className="display">{display}</div>
      <div className="buttons">
      
<div className="buttons">
  {/* ... (other buttons) */}
  <button onClick={() => handleButtonClick('%')}>%</button>
</div>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>x</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('C')} className="clear">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
