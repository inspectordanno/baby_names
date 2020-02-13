import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import startCase from 'lodash/startCase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { setName } from '../actions/actions';
import namesList from '../../r/namesList.json';


const NameSelect = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  //makes first letter capitalized and all other letters lowercase
  const titleCase = (str) => {
    return startCase(str.toLowerCase());
  }

  //this checks if what is typed in the name input is in the array of names
  const doesNameExist = (name) => {
    //makes first letter of name capitalized, all other letters lowercase
    name = titleCase(name);

    //returns true if name is in list of names
    return namesList.includes(name);

  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (doesNameExist(text)) {
      //if name exists, titleCase name and send to store
      dispatch(setName(
        titleCase(text)
      ));

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