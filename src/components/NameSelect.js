import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup } from '@material-ui/core';
import startCase from 'lodash/startCase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import femaleNames from '../../r/femaleNames.json';
import maleNames from '../../r/maleNames.json';
import { setName } from '../actions/actions';


const NameSelect = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  //this checks if what is typed in the name input is in the array of names
  const doesNameExist = (name) => {
    //makes first letter of name capitalized, all other letters lowercase
    name = startCase(name.toLowerCase());

  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (doesNameExist(text)) {
      //if name exists, send name to store
      dispatch(setName(text));

      //if name doesn't exist, prompt for another name
    } else if (!doesNameExist(text)) {
      alert('This name does not exist in the data. Please try another name.');

      //resets TextField
      setText('');
    }
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
      <TextField id="outlined-basic" label="Enter a name" variant="outlined" value={text} onChange={handleTextChange} />
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  )
}

export default NameSelect;