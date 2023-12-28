  // src/redux/reducers.js
  const initialState = {
    searchTerm: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_TERM':
        return { ...state, searchTerm: action.payload };
      // Add more cases for other actions
      default:
        return state;
    }
  };
  
  export default rootReducer;