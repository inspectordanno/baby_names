import React from 'react';
import { useDispatch } from 'react-redux';
import { setSex } from '../actions/actions';

const SexSelect = () => {

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
   const checked = e.target.checked;
   //if was checked, change state to male; if wasn't checked, change state to female
   //send to store
   checked ? dispatch(setSex('M')) : dispatch(setSex('F'));
  }

  return (
    <div>
      <label className="switch switch-slide">
      <input className="switch-input" type="checkbox" onChange={handleOnChange} />
      <span className="switch-label" data-on="Male" data-off="Female"></span> 
      <span className="switch-handle"></span>
      </label>
    </div>
  );
}

export default SexSelect;