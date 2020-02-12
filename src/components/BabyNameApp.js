import React from 'react';
import SexSelect from './SexSelect';
import NameSelect from './NameSelect';
import LineChart from './LineChart';

const BabyNameApp = () => {
  
  return (
    <div className="BabyNameApp">
      <SexSelect />
      <NameSelect />
      <LineChart />
    </div>
  );
}

export default BabyNameApp;