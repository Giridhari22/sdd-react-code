import React, { Component } from 'react';
import './Class.css'

class ClassCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }

  handleNumChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddition = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) + Number(num2);
    this.setState({ result });
  }

  handleSubtraction = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) - Number(num2);
    this.setState({ result });
  }

  handleMultiplication = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) * Number(num2);
    this.setState({ result });
  }

  handleDivision = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) / Number(num2);
    this.setState({ result });
  }

  handleButtonClick = () =>{
     this.setState({ num1:"",
     num2:"",
      result: "" });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div className='calculator'>
        <h1 className='text1'>class based Calculator</h1>

        <div>
            <h2 className='text2'>value 1</h2>
             <input type="number" name="num1" className='calculator__input' value={num1} onChange={this.handleNumChange} />
         <h2 className='text2'>value 2</h2>
        <input type="number" name="num2" className='calculator__input' value={num2} onChange={this.handleNumChange} />
        </div>
        
       <div>
        <br />
        <button className='calculator__buttons calculator__button--calculate'  onClick={this.handleAddition}>+</button>
        <button className='calculator__buttons calculator__button--calculate'  onClick={this.handleSubtraction}>-</button>
        <button className='calculator__buttons calculator__button--calculate ' onClick={this.handleMultiplication}>*</button>
        <button className='calculator__buttons calculator__button--calculate' onClick={this.handleDivision}>/</button>
        
        <button onClick={this.handleButtonClick} className='calculator__button--clear calculator__button--clear' value="Clear">Clear</button>
        </div>

        <p className='text2'>Result:</p>
        <input type="number" className='calculator__input' name="num1" value={result} onChange={this.handleNumChange} />

        
      </div>
    );
  }
}

export default ClassCalculator;
