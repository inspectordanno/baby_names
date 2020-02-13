const reducerDefaultState = {
  name: 'Taylor'
}

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_NAME_DATA':
      return {
        ...state,
        nameData: action.nameData
      }
    default: 
      return state;
  }
};