const reducerDefaultState = {
  sex: 'F',
  name: 'Mary'
}

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEX':
      return {
        ...state,
        sex: action.sex
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default: 
      return state;
  }
};