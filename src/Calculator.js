// Calculator.js

import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  

  const validateInputs = () => {
    if (!num1.trim()) {
      setError('Num1 cannot be empty.');
      return false;
    }
    if (!num2.trim()) {
      setError('Num2 cannot be empty.');
      return false;
    }
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError('Please enter valid numbers for both inputs.');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    setResult(null);
    setError('');
    if (!validateInputs()) return;

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        setResult(parsedNum1 + parsedNum2);
        break;
      case 'subtract':
        setResult(parsedNum1 - parsedNum2);
        break;
      case 'multiply':
        setResult(parsedNum1 * parsedNum2);
        break;
      case 'divide':
        if (parsedNum2 !== 0) {
          setResult(parsedNum1 / parsedNum2);
        } else {
          setError('Cannot divide by zero.');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Num1"
        />
    


        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Num2"
        />
    

      <div className="buttons">
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>

      {error && <div className="error">Error!
      <p>{error}</p>
      </div>}
      {result !== null && (
        <div className="success">success!
          <p>Result: {result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;

