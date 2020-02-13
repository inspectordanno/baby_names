const reducerDefaultState = {
  name: 'Mary'
}

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default: 
      return state;
  }
};