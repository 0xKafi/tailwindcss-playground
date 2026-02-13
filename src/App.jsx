import React from 'react';
import LandingPage from './components/LandingPage';
import GridCards from './components/GridCards';
import Grid from './components/Grid';

const App = () => {
  return (
    <div className='h-screen flex justify-center'>
      {/* <LandingPage></LandingPage> */}
      <GridCards></GridCards>
      {/* <Grid></Grid> */}
    </div>
  );
};

export default App;