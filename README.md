import React, { useState } from 'react';

// Function-based Calculator
const FunctionCalculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult(result + parseFloat(input));
    setInput('');
  };

  const handleSubtract = () => {
    setResult(result - parseFloat(input));
    setInput('');
  };

  const handleMultiply = () => {
    setResult(result * parseFloat(input));
    setInput('');
  };

  const handleDivide = () => {
    setResult(result / parseFloat(input));
    setInput('');
  };

  return (
    <div>
      <h1>Function Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

// Class-based Calculator
class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      input: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    this.setState({
      result: this.state.result + parseFloat(this.state.input),
      input: '',
    });
  };

  handleSubtract = () => {
    this.setState({
      result: this.state.result - parseFloat(this.state.input),
      input: '',
    });
  };

  handleMultiply = () => {
    this.setState({
      result: this.state.result * parseFloat(this.state.input),
      input: '',
    });
  };

  handleDivide = () => {
    this.setState({
      result: this.state.result / parseFloat(this.state.input),
      input: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Class Calculator</h1>
        <input
          type="number"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleMultiply}>*</button>
        <button onClick={this.handleDivide}>/</button>
        <h2>Result: {this.state.result}</h2>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <FunctionCalculator />
      <ClassCalculator />
    </div>
  );
}
