import React from 'react';
import { useSelector } from 'react-redux';
import NameSelect from './NameSelect';
import LineChart from './LineChart';

const BabyNameApp = () => {
  
  return (
    <div className="BabyNameApp">
      <NameSelect />
      <LineChart />
    </div>
  );
}

export default BabyNameApp;