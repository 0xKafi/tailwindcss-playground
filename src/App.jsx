import React from 'react';
import LandingPage from './components/LandingPage';
import GridCards from './components/GridCards';

const App = () => {
  return (
    <div className='h-screen flex justify-center'>
      {/* <LandingPage></LandingPage> */}
      <GridCards></GridCards>
    </div>
  );
};

export default App;