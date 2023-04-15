import React, { useState } from 'react';


const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNumChange = (event) => {
    const { name, value } = event.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  }

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  }

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  }

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  }

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  }

  const handleButtonClick = () => {
    setResult('')
    setNum1('')
    setNum2('')
  }

  return (
    <div className='calculator'>
        <h1 className='text1' > Function based Calculator</h1>
      <div>
       <h2 className='text2'>value 1</h2>
      <input type="number" name="num1"  className='calculator__input' value={num1} onChange={handleNumChange} />
      <h2 className='text2'>value 2</h2>
      <input type="number" name="num2"  className='calculator__input' value={num2} onChange={handleNumChange} />
      
      </div>
      
      <div>
        <br />
       <button  className='calculator__buttons calculator__button--calculate' onClick={handleAddition}>+</button>
      <button className='calculator__buttons calculator__button--calculate' onClick={handleSubtraction}>-</button>
      <button className='calculator__buttons calculator__button--calculate' onClick={handleMultiplication}>*</button>
      <button className='calculator__buttons calculator__button--calculate' onClick={handleDivision}>/</button>
       <button onClick={handleButtonClick} className='calculator__button--clear calculator__button--clear' value="Clear">Clear</button>
      </div>
      
       <p className='text2'>Result</p>
      <p><input className='calculator__input' type="number" name="num1" value={result} onChange={handleNumChange} readOnly/></p>
    
           
    </div>
  );
}

export default Calculator;
