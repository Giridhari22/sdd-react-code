import React, {  useState } from 'react';
import ClassCalculator from './components/class';
import Calculator from './components/function';




const App = () => {
  const [isClassComponent, setIsClassComponent] = useState(true);

  const toggleComponent = () => {
    setIsClassComponent(!isClassComponent);
  };

  return (
    <div>
      {isClassComponent ? (
        <ClassCalculator />
      ) : (
        <Calculator />
      )}
      <button onClick={toggleComponent}>
        Switch Component
      </button>
    </div>
  );
};

export default App;