import React from 'react';
import Carousel from './components/Carousel';
import InputValidation from './components/InputValidation';
import ScrollingSections from './components/ScrollingSections';

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      <InputValidation />
      <ScrollingSections />
    </div>
  );
};

export default App;
