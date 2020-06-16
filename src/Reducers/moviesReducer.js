import initialState from './initialState';
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_DATA':
      return Object.assign({}, state, { moviesData: action.data });
    default:
      return state;
  }
};
export default moviesReducer;