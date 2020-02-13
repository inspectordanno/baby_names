import React from 'react';
import { useSelector } from 'react-redux';
import NameSelect from './NameSelect';
import LineChart from './LineChart';

const BabyNameApp = () => {

  const name = useSelector(state => state.name);
  
  return (
    <div className="BabyNameApp">
      <NameSelect />
      <LineChart name={name} />
    </div>
  );
}

export default BabyNameApp;